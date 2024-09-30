import Image from "next/legacy/image"
import { FaWhatsapp } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5"

export default function FooterRAC() {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <ul className="flex gap-7 text-xl text-gray-600 font-bold px-5 flex-wrap justify-center">
        <li>
          <a
            href="#conocenos"
            className="hover:text-violetaLR transition-all duration-300"
          >
            Conócenos
          </a>
        </li>
        <li>
          <a
            href="#etapas"
            className="hover:text-violetaLR transition-all duration-300"
          >
            Etapas
          </a>
        </li>
        <li>
          <a
            href="#horarios"
            className="hover:text-violetaLR transition-all duration-300"
          >
            Horarios
          </a>
        </li>
        <li>
          <a
            href="#diferencia"
            className="hover:text-violetaLR transition-all duration-300"
          >
            ¿Qué nos diferencia?
          </a>
        </li>
      </ul>
      <div className="flex gap-7 justify-center py-7">
        <a href="#" className="hover:scale-110 transition-all duration-300">
          <FaWhatsapp className="bg-violetaLR text-white p-1 text-4xl rounded-lg" />
        </a>
        <a href="#" className="hover:scale-110 transition-all duration-300">
          <IoLogoInstagram className="bg-violetaLR text-white p-1 text-4xl rounded-lg" />
        </a>
      </div>
      <div className="relative w-[100px] h-[30px]">
        <Image
          src="/img/lero_logo_h.webp"
          objectFit="contain"
          layout="fill"
          alt="lerobotica"
        />
      </div>
      <p className="text-gray-600 text-center">
        © 2024 Lerobotica. All Right Reserved.
      </p>
    </div>
  )
}
