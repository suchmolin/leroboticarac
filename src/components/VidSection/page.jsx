import Image from "next/image"
import { FaPlay } from "react-icons/fa"
export default function VidSection() {
  return (
    <div className="w-full relative flex flex-col items-center bg-[url('/img/curvaFondo.jpg')] bg-contain bg-bottom bg-no-repeat pb-10">
      <h2 className="text-base sm:text-2xl md:text-3xl text-azulLR text-center py-8 z-10">
        ¡Deja que la programación y la robotica <br />
        llenen de emoción las tardes de tus hijos!
      </h2>
      <div className="rounded-2xl w-[280px] xs:w-[360px] sm:w-[600px] aspect-video bg-gray-400 overflow-hidden flex justify-center items-center md:mb-32 z-10">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/jsuchmolin-394bd.appspot.com/o/Video%2060%20Landing%20page.mp4?alt=media&token=905c747e-86a6-407a-9e22-7085eb7cac4c"
          controls
          autoPlay
          muted
          loop
          className="w-full h-full cursor-pointer"
        ></video>
      </div>
      <div
        id="conocenos"
        className="w-full lg:w-10/12 flex flex-col md:flex-row items-center"
      >
        <div className="relative w-[270px] xs:w-[300px] md:w-[500px] aspect-square z-10">
          <Image
            src="/img/robotConocenos.png"
            layout="fill"
            objectFit="contain"
            alt="Lerobotica robot"
          />
        </div>
        <div className="w-full sm:w-10/12 md:w-6/12 flex flex-col justify-center px-5 sm:px-10">
          <h3 className="text-6xl font-[BurgerElbow] text-violetaLR mb-5 text-center sm:text-start">
            CONÓCENOS
          </h3>
          <p className="text-justify sm:text-xl">
            <span className="text-verdeLR font-[GothamBold]">
              Somos el instituto líder en robótica y programacion para niños,{" "}
            </span>
            donde la creatividad se une con la tecnología. Ofrecemos espacios
            innovadores para que exploren, construyan y programen a través del{" "}
            <span className="text-azulLR font-[GothamBold]">
              Sistema de Aprendizaje LEGO.
            </span>
          </p>
        </div>
      </div>
      <h2
        id="etapas"
        className="text-3xl sm:text-5xl text-azulLR text-center py-5 font-[GothamBlack]"
      >
        ¡Conoce las etapas!
      </h2>
      <div className="absolute left-0 top-60 sm:top-20 md:top-[450px] lg:top-60">
        <div className="relative w-[200px] sm:w-[300px] lg:w-[500px] aspect-square">
          <Image
            src="/img/linea.png"
            objectFit="contain"
            objectPosition="left"
            layout="fill"
            alt="linea"
          />
        </div>
      </div>
      <div className="absolute right-0 top-80">
        <div className="relative w-[100px] lg:w-[210px] xl:w-[250px] h-[200px] lg:h-[400px] xl:h-[500px]">
          <Image
            src="/img/gotaFondo.png"
            objectFit="contain"
            objectPosition="left"
            layout="fill"
            alt="gota"
          />
        </div>
      </div>
      <div className="absolute right-0 lg:right-20 top-0 sm:top-10">
        <div className="relative w-[30px] sm:w-[50px] lg:w-[80px] aspect-square">
          <Image
            src="/img/Landing-page-año-escolar-7.png"
            objectFit="contain"
            objectPosition="left"
            layout="fill"
            alt="gota"
          />
        </div>
      </div>
    </div>
  )
}
