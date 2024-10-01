import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappButton() {
  return (
    <a
      aria-label="whatsapp"
      href="https://wa.me/584122030567"
      className="fixed bottom-2 xs:bottom-4 right-2 xs:right-4 rounded-full bg-verdeLR p-2 flex justify-center items-center text-white text-3xl hover:bg-white hover:text-verdeLR transition-all duration-300 shadow-xl z-50"
    >
      <FaWhatsapp />
    </a>
  )
}
