import Image from "next/legacy/image"

export default function TarjetaEtapa({ data }) {
  const {
    colorFondo,
    colorTitulo,
    colorFondoTitulo,
    colorEdades,
    colorTexto,
    titulo,
    edades,
    texto,
    imgSrc,
    imgAlt,
  } = data

  return (
    <div
      className={`w-full flex items-center justify-center py-5 ${colorFondo}`}
    >
      <div className="w-10/12 xl:w-8/12 flex flex-col sm:flex-row items-center justify-center z-20">
        <div className="relative w-[250px] lg:w-[350px] aspect-square">
          <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="contain" />
        </div>
        <div className="w-11/12 sm:w-8/12 sm:pl-5  lg:pl-10 xl:pl-20 sm:pr-10 md:pr-20 lg:pr-40 xl:pr-20 flex flex-col items-center sm:items-start">
          <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center mb-5">
            <p
              className={`${colorTitulo} rounded-md py-1 text-base md:text-lg lg:text-3xl font-[GothamBold]`}
            >
              {titulo}
            </p>
            <p
              className={`${colorEdades} text-xl lg:text-2xl font-[GothamBold]`}
            >
              {edades}
            </p>
          </div>
          <p
            className={`text-xs md:text-sm lg:text-base text-justify mb-7 ${colorTexto}`}
          >
            {texto}
          </p>
          <a
            href="#contactanos"
            className={`text-white px-4 py-2 rounded-md w-fit ${colorFondoTitulo}`}
          >
            Comenzar
          </a>
        </div>
      </div>
    </div>
  )
}
