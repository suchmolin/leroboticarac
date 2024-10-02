import ContactanosRAC from "@/components/ContactanosRAC/page"
import DiferenciasRAC from "@/components/DiferenciasRAC/page"
import EtapasRAC from "@/components/EtapasRAC/page"
import FooterRAC from "@/components/Footer/page"
import HeaderRAC from "@/components/HeaderRAC/page"
import HorariosRAC from "@/components/HorariosRAC/page"
import NavBar from "@/components/NavBar/page"
import VidSection from "@/components/VidSection/page"
import WhatsappButton from "@/components/WhatsappButton/page"

export default function Home() {
  return (
    <main className="font-[Gotham]">
      <NavBar />
      <HeaderRAC />
      <VidSection />
      <EtapasRAC />
      <DiferenciasRAC />
      <HorariosRAC />
      <ContactanosRAC />
      <WhatsappButton />
      <FooterRAC />
    </main>
  )
}
