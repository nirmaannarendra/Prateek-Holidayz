"use client";

import { motion } from "framer-motion";
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { companyInfo } from "@/lib/data";
import { useSafeReducedMotion } from "./motion";
import { usePackageContext } from "./PackageContext";

export function WhatsAppButton() {
  const { packageTitle } = usePackageContext();
  const shouldReduceMotion = useSafeReducedMotion();
  const text = packageTitle
    ? `Hi Prateek Holidayz! I'd like to know more about the "${packageTitle}" package.`
    : "Hi Prateek Holidayz! I'd like to know more about your travel packages.";
  const message = encodeURIComponent(text);

  return (
    <motion.a
      key={shouldReduceMotion ? "reduced" : "motion"}
      href={`https://wa.me/${companyInfo.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        packageTitle
          ? `Chat with us on WhatsApp about ${packageTitle}`
          : "Chat with us on WhatsApp"
      }
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: shouldReduceMotion ? 0 : 0.8,
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-lifted md:flex"
    >
      <WhatsappLogoIcon size={30} weight="fill" />
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  );
}
