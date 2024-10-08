import Image from "next/legacy/image"
import TarjetaEtapa from "../TarjetaEtapa/page"

export default function EtapasRAC() {
  const data = [
    {
      colorFondo: "bg-tuquesaLR",
      colorTitulo: "text-white",
      colorFondoTitulo: "bg-violetaLR",
      colorEdades: "text-azulLR",
      colorTexto: "text-black",
      titulo: "Preescolar",
      edades: "3 a 5 años",
      texto:
        "Etapa principal donde los niños aprenden las bases de la codificación temprana a través de secuencias y bucles, además de desarrollar sus habilidades en lectoescritura y logran identificar y comunicar sus emociones.",
      imgSrc: "/img/imgPreescolar.png",
      imgAlt: "niño pequeño jugando con legos",
    },
    {
      colorFondo: "bg-white",
      colorTitulo: "text-azulLR",
      colorFondoTitulo: "bg-azulLR",
      colorEdades: "text-violetaLR",
      colorTexto: "text-black",
      titulo: "Primaria Baja",
      edades: "6 a 8 años",
      texto:
        "Etapa media donde los niños desarrollan habilidades en programación utilizando el lenguaje de Scratch Jr, además de fomentar competentencias socioemocionales, lingüísticas y matemáticas.",
      imgSrc: "/img/imgPrimariaBaja.png",
      imgAlt: "niña pequeña feliz por haber contruido un robot",
    },
    {
      colorFondo: "bg-azulLR",
      colorTitulo: "text-amarilloLR",
      colorFondoTitulo: "bg-amarilloLR",
      colorEdades: "text-white",
      colorTexto: "text-white",
      titulo: "Primaria Alta",
      edades: "9 a 11 años",
      texto:
        "Etapa final en la que mediante conocimientos de ingeniería, aplican habilidades de diseño, construcción y programación utilizando el lenguaje Python mientras desarrollan habilidades de trabajo en equipo.",
      imgSrc: "/img/imgPrimariaAlta.png",
      imgAlt: "niño con un robot hecho con legos",
    },
  ]
  return (
    <div className="relative w-full flex flex-col items-center -mt-1 overflow-hidden">
      {data.map((item, index) => (
        <TarjetaEtapa data={item} key={index} />
      ))}
      <div className="absolute left-0 top-0">
        <div className="relative w-[420px] h-[110vh] lg:h-[150vh]">
          <Image
            src="/img/fondoEtapas.png"
            objectFit="contain"
            objectPosition="left"
            layout="fill"
            alt="gota"
          />
        </div>
      </div>
      <div className="hidden sm:block absolute right-0 bottom-0">
        <div className="relative w-[420px] h-[110vh] lg:h-[150vh]">
          <Image
            src="/img/fondoEtapas2.png"
            objectFit="contain"
            objectPosition="right"
            layout="fill"
            alt="gota"
          />
        </div>
      </div>
    </div>
  )
}
