import Image from "next/image"

export default function HeaderRAC() {
  return (
    <div className="w-full h-[100vh] flex justify-center">
      <div className="w-4/12 lg:w-3/12 h-full hidden sm:flex flex-col items-center justify-center">
        <div className="relative w-[200px] lg:w-[180px] xl:w-[200px] h-[300px] lg:h-[200px] xl:h-[300px] mb-7">
          <Image
            src="/img/logo.png"
            objectFit="contain"
            layout="fill"
            alt="Lerobotica"
          />
        </div>
        <h2 className="text-5xl xl:text-6xl flex flex-col text-center text-violetaLR font-[BurgerElbow]">
          AÑO ESCOLAR
          <span className="text-3xl md:text-4xl xl:text-5xl text-azulLR font-[GothamBold]">
            2024 - 2025
          </span>
        </h2>
      </div>
      <div className="w-full sm:w-8/12 lg:w-9/12 flex flex-col lg:flex-row bg-[url('/img/fondoHeader.jpg')] bg-cover bg-no-repeat bg-left-bottom sm:pl-20 lg:pl-0">
        <div className="lg:w-6/12 flex flex-col justify-center items-center lg:items-start lg:pl-[7%] py-5 lg:py-0 text-center sm:text-start">
          <div className="flex sm:hidden w-full items-center justify-center">
            <div className="relative w-[100px] h-[150px] lg:h-[200px] xl:h-[300px] mb-7 mx-4">
              <Image
                src="/img/logo.png"
                objectFit="contain"
                layout="fill"
                alt="Lerobotica"
              />
            </div>
            <h2 className="text-4xl flex flex-col text-center text-violetaLR font-[BurgerElbow]">
              AÑO <br /> ESCOLAR
              <span className="text-2xl xs:text-3xl md:text-4xl xl:text-5xl text-azulLR font-[GothamBold]">
                2024 - 2025
              </span>
            </h2>
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl text-azulLR mb-4">
            ¡Una innovación <br />
            extracurricular!
          </h2>
          <h1 className="text-4xl md:text-5xl xl:text-6xl text-violetaLR font-[GothamBlack]">
            Robótica y <br /> programación
          </h1>
        </div>
        <div className="lg:w-6/12 flex items-end justify-center lg:justify-start h-full">
          <div className="w-[250px] sm:w-[500px] xl:w-[560px] h-full lg:h-[700px] xl:h-[600px] relative">
            <Image
              src="/img/imgHeaderRAC.png"
              objectFit="contain"
              layout="fill"
              alt="Lerobotica"
              objectPosition="bottom"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
