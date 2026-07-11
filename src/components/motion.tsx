"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useId, useSyncExternalStore, type ReactNode } from "react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

function subscribeNoop() {
  return () => {};
}

/**
 * framer-motion's useReducedMotion reads the OS media query synchronously on
 * first client render, which mismatches the SSR pass (always "false") and
 * throws a hydration error. useSyncExternalStore lets us report "false" on
 * the server and the first client paint, then the real preference right after.
 */
function useHasMounted() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );
}

export function useSafeReducedMotion(): boolean {
  const shouldReduceMotion = useReducedMotion();
  const hasMounted = useHasMounted();

  return hasMounted ? Boolean(shouldReduceMotion) : false;
}

/**
 * initial/animate/whileInView must stay referentially "present" across
 * renders — toggling them to `undefined` once reduced-motion is detected
 * (post-mount) leaves the element stuck at its `initial` value forever,
 * since there's no longer an animate target to resolve to. So these always
 * stay defined; only the transition duration collapses to 0.
 *
 * That alone isn't quite enough: shouldReduceMotion is necessarily `false`
 * on the very first client render (to match SSR), so an animation can start
 * with the "full motion" transition before the real reduced-motion value
 * resolves a beat later — and Framer Motion doesn't retroactively re-time an
 * animation that's already in flight from a transition-only prop change. Key
 * on the resolved value so reduced-motion users get one clean remount with
 * the correct (instant) transition baked in from the start; everyone else's
 * key never changes, so this is a no-op for the common case. The key is
 * namespaced with useId so sibling Reveal/TextReveal/etc. instances (which
 * all resolve the same shouldReduceMotion value) don't collide.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span";
}) {
  const shouldReduceMotion = useSafeReducedMotion();
  const id = useId();
  const Component = motion[as];

  return (
    <Component
      key={`${id}-${shouldReduceMotion ? "reduced" : "motion"}`}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </Component>
  );
}

function getStaggerContainer(shouldReduceMotion: boolean): Variants {
  return {
    hidden: {},
    visible: {
      transition: shouldReduceMotion
        ? {}
        : { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };
}

function getStaggerItem(shouldReduceMotion: boolean): Variants {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: EASE_OUT },
    },
  };
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useSafeReducedMotion();
  const id = useId();

  return (
    <motion.div
      key={`${id}-${shouldReduceMotion ? "reduced" : "motion"}`}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={getStaggerContainer(shouldReduceMotion)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useSafeReducedMotion();

  return (
    <motion.div className={className} variants={getStaggerItem(shouldReduceMotion)}>
      {children}
    </motion.div>
  );
}

/**
 * A masked line-reveal: the content slides up from behind an overflow-hidden
 * clip rather than fading in place. Reserved for headline-weight text — the
 * signature motion moment, not something to sprinkle on every element.
 */
export function TextReveal({
  children,
  delay = 0,
  className,
  viewport = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** false plays immediately on mount instead of on scroll-into-view (for above-the-fold text). */
  viewport?: boolean;
}) {
  const shouldReduceMotion = useSafeReducedMotion();
  const id = useId();
  const animateProps = viewport
    ? { whileInView: { y: "0%" }, viewport: { once: true, margin: "-40px" } }
    : { animate: { y: "0%" } };

  return (
    <span className={`block overflow-hidden ${className ?? ""}`}>
      <motion.span
        key={`${id}-${shouldReduceMotion ? "reduced" : "motion"}`}
        className="block"
        initial={{ y: "110%" }}
        {...animateProps}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.9,
          delay: shouldReduceMotion ? 0 : delay,
          ease: EASE_OUT,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * A stage-curtain unveil: a solid panel sweeps off an image on load/scroll-in
 * instead of the image simply fading. Meant for hero-weight imagery only.
 */
export function CurtainReveal({
  delay = 0,
  viewport = true,
}: {
  delay?: number;
  viewport?: boolean;
}) {
  const shouldReduceMotion = useSafeReducedMotion();
  const id = useId();
  const animateProps = viewport
    ? { whileInView: { scaleX: 0 }, viewport: { once: true, margin: "-40px" } }
    : { animate: { scaleX: 0 } };

  return (
    <motion.div
      key={`${id}-${shouldReduceMotion ? "reduced" : "motion"}`}
      aria-hidden="true"
      initial={{ scaleX: 1 }}
      {...animateProps}
      transition={{
        duration: shouldReduceMotion ? 0 : 1,
        delay: shouldReduceMotion ? 0 : delay,
        ease: EASE_OUT,
      }}
      style={{ transformOrigin: "right" }}
      className="absolute inset-0 z-[2] bg-primary-dark"
    />
  );
}
