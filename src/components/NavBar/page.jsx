export default function NavBar() {
  return (
    <div className="absolute top-0 w-full h-[50px] flex justify-center items-center bg-naranjaLR">
      <ul className="w-full h-full flex text-white justify-center items-center">
        <li className="h-full items-center flex">
          <a
            className="h-full flex items-center px-10 hover:bg-verdeLR transition-all duration-300"
            href="#"
          >
            Conócenos
          </a>
        </li>
        <li className="h-full items-center flex">
          <a
            className="h-full flex items-center px-10 hover:bg-verdeLR transition-all duration-300"
            href="#"
          >
            Etapas
          </a>
        </li>
        <li className="h-full items-center flex">
          <a
            className="h-full flex items-center px-10 hover:bg-verdeLR transition-all duration-300"
            href="#"
          >
            Horarios
          </a>
        </li>
        <li className="h-full items-center flex">
          <a
            className="h-full flex items-center px-10 hover:bg-verdeLR transition-all duration-300"
            href="#"
          >
            Contactanos
          </a>
        </li>
      </ul>
    </div>
  )
}
