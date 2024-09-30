import Image from "next/legacy/image"

export default function HeaderRAC() {
  return (
    <div className="w-full h-[650px] xs:h-[700px] sm:h-[720px] flex justify-center mt-10 ">
      <div className="w-4/12 lg:w-3/12 h-full hidden sm:flex flex-col items-center justify-center">
        <div className="relative w-[200px] lg:w-[180px] xl:w-[200px] h-[300px] lg:h-[200px] xl:h-[300px] mb-7">
          <Image
            src="/img/logo.png"
            objectFit="contain"
            layout="fill"
            alt="Lerobotica"
            priority
          />
        </div>
        <h2 className="text-5xl xl:text-6xl flex flex-col text-center text-violetaLR font-[BurgerElbow]">
          AÑO ESCOLAR
          <span className="text-3xl md:text-4xl xl:text-5xl text-azulLR font-[GothamBold]">
            2024 - 2025
          </span>
        </h2>
      </div>
      <div className="w-full sm:w-8/12 lg:w-9/12 flex flex-col-reverse sm:flex-col lg:flex-row bg-[url('/img/fondoHeaderResp.png')] sm:bg-[url('/img/fondoHeader.jpg')] bg-cover bg-no-repeat bg-bottom sm:bg-left-bottom sm:pl-20 lg:pl-0">
        <div className="w-full h-full flex flex-col-reverse justify-end sm:justify-start sm:flex-col lg:flex-row pt-10">
          <div className="lg:w-6/12 flex flex-col-reverse sm:flex-col justify-center items-center lg:items-start lg:pl-[7%] sm:py-5 lg:py-0 text-center sm:text-start">
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-4xl xl:text-5xl text-azulLR sm:mb-4 leading-[25px] sm:leading-normal mt-2 sm:mt-0">
                ¡Una innovación <br />
                extracurricular!
              </h2>
              <h1 className="text-3xl md:text-5xl xl:text-6xl text-violetaLR font-[GothamBlack] sm:mb-10 leading-[28px] sm:leading-normal mt-2 sm:mt-0">
                Robótica y <br /> programación
              </h1>
            </div>
            <a
              href="#contactanos"
              className="w-fit px-16 py-3 sm:py-2 bg-verdeLR rounded-3xl inline-block text-white text-lg xs:text-2xl font-[GothamBlack] hover:bg-azulLR hover:text-white transition-all duration-300 z-10"
            >
              ¡Incríbete ahora!
            </a>
          </div>
          <div className="lg:w-6/12 flex items-end justify-center lg:justify-start sm:h-full">
            <div className="w-[320px] sm:w-[350px] xl:w-[560px] aspect-square relative -mb-7 sm:mb-0">
              <Image
                src="/img/imgHeaderRAC.png"
                objectFit="contain"
                layout="fill"
                alt="Lerobotica"
                objectPosition="bottom"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex sm:hidden w-full items-center justify-between px-5 pt-5">
          <div className="relative w-[90px] xs:w-[70px] h-[120px] xs:h-[100px] mx-4">
            <Image
              src="/img/logo.png"
              objectFit="contain"
              layout="fill"
              alt="Lerobotica"
              priority
            />
          </div>
          <h2 className="text-3xl xs:text-5xl flex flex-col text-center text-violetaLR font-[BurgerElbow] ">
            AÑO ESCOLAR
            <span className="text-xl xs:text-4xl md:text-4xl xl:text-5xl text-azulLR font-[GothamBold]">
              2024 - 2025
            </span>
          </h2>
        </div>
      </div>
    </div>
  )
}
