import { PhoneIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { companyInfo } from "@/lib/data";

export function MobileActionBar() {
  const message = encodeURIComponent(
    "Hi Rann Voyages! I'd like to know more about your travel packages."
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-surface shadow-lifted md:hidden">
      <a
        href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-foreground"
        style={{ paddingBottom: "calc(0.875rem + env(safe-area-inset-bottom))" }}
      >
        <PhoneIcon size={18} weight="fill" className="text-primary" />
        Call
      </a>
      <a
        href={`https://wa.me/${companyInfo.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-semibold text-white"
        style={{ paddingBottom: "calc(0.875rem + env(safe-area-inset-bottom))" }}
      >
        <WhatsappLogoIcon size={18} weight="fill" />
        WhatsApp
      </a>
    </div>
  );
}
