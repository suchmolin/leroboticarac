export default function NavBar() {
  return (
    <div className="absolute top-0 w-full h-[50px] flex justify-center items-center bg-naranjaLR">
      <ul className="w-full h-full flex text-white justify-center items-center">
        <li className="h-full items-center flex">
          <a
            className="h-full flex items-center px-10 hover:bg-verdeLR transition-all duration-300"
            href="#conocenos"
          >
            Conócenos
          </a>
        </li>
        <li className="h-full items-center flex">
          <a
            className="h-full flex items-center px-10 hover:bg-verdeLR transition-all duration-300"
            href="#etapas"
          >
            Etapas
          </a>
        </li>
        <li className="h-full items-center flex">
          <a
            className="h-full flex items-center px-10 hover:bg-verdeLR transition-all duration-300"
            href="#horarios"
          >
            Horarios
          </a>
        </li>
        <li className="h-full items-center flex">
          <a
            className="h-full flex items-center px-10 hover:bg-verdeLR transition-all duration-300"
            href="#contactanos"
          >
            Contáctanos
          </a>
        </li>
      </ul>
    </div>
  )
}
