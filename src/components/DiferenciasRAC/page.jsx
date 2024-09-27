import Image from "next/image"

export default function DiferenciasRAC() {
  return (
    <div className="w-full flex justify-center py-20 bg-[url('/img/fondoDif.jpg')] bg-contain bg-top bg-no-repeat -mt-1">
      <div className="w-11/12 sm:w-10/12 lg:w-9/12 flex flex-col-reverse sm:flex-row justify-between items-center">
        <div className="w-7-12 xl:w-6/12 flex flex-col justify-center gap-3 py-10">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-[GothamBold] text-violetaLR">
            ¿Qué nos diferencia?
          </h2>
          <div className="flex gap-4 sm:text-lg lg:text-xl">
            <div className="w-[15px] h-[15px] mt-2 bg-amarilloLR"></div>
            <p className="w-11/12">
              <b>25 años de experiencia</b> en el sector educativo
            </p>
          </div>
          <div className="flex gap-4 sm:text-lg lg:text-xl">
            <div className="w-[15px] h-[15px] mt-2 bg-amarilloLR"></div>
            <p className="w-11/12">
              Profesores <b>especializados</b>
            </p>
          </div>
          <div className="flex gap-4 sm:text-lg lg:text-xl">
            <div className="w-[15px] h-[15px] mt-2 bg-amarilloLR"></div>
            <p className="w-11/12">
              <b>Grupos reducidos</b> y atención personalizada
            </p>
          </div>
          <div className="flex gap-4 sm:text-lg lg:text-xl">
            <div className="w-[15px] h-[15px] mt-2 bg-amarilloLR"></div>
            <p className="w-11/12">
              Enseñamos robótica y programacion con el{" "}
              <b>Sistema de Aprendizaje LEGO</b>
            </p>
          </div>
          <div className="flex gap-4 sm:text-lg lg:text-xl">
            <div className="w-[15px] h-[15px] mt-2 bg-amarilloLR"></div>
            <p className="w-11/12">
              Espacios temáticos y<b>seguros</b>
            </p>
          </div>
        </div>
        <div className="relative w-[200px] xs:w-[350px] sm:w-[630px] aspect-square -mt-20">
          <Image
            src="/img/robotDif.png"
            layout="fill"
            objectFit="contain"
            alt="robot"
          />
        </div>
      </div>
    </div>
  )
}
