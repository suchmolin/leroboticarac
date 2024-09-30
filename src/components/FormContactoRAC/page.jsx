"use client"
import { Select, Textarea, TextInput } from "flowbite-react"

export default function FormContactoRAC() {
  return (
    <div className="w-full flex items-center justify-center pb-20">
      <form
        id="myForm"
        className="relative w-full sm:w-9/12 bg-white/40 py-10 px-5 xs:px-10 rounded-xl flex flex-col gap-3 sm:gap-7 justify-center items-center shadow-xl"
      >
        <div className="w-full ">
          <input
            placeholder="Nombre y Apellido"
            type="text"
            id="nombre"
            name="Nombre"
            className="bg-white border-none text-gray-900 text-sm rounded-lg block w-full px-2.5 py-5  placeholder:text-gray-800"
            required
          />
        </div>
        <div className="w-full flex gap-4">
          <input
            placeholder="Ciudad"
            type="text"
            id="ciudad"
            name="ciudad"
            className="bg-white border-none text-gray-900 text-sm rounded-lg block w-full px-2.5 py-5  placeholder:text-gray-800"
            required
          />
          <input
            placeholder="Telefono"
            type="number"
            id="telefono"
            name="telefono"
            className="bg-white border-none text-gray-900 text-sm rounded-lg block w-full px-2.5 py-5 placeholder:text-gray-800"
            required
          />
        </div>
        <div className="w-full ">
          <input
            placeholder="Correo Electrónico"
            type="email"
            id="email"
            name="email"
            className="bg-white border-none text-gray-900 text-sm rounded-lg block w-full px-2.5 py-5  placeholder:text-gray-800"
            required
          />
        </div>
        <div className="w-full ">
          <select
            id="sede"
            name="sede"
            className="bg-white border-none text-gray-900 text-sm rounded-lg block w-full py-3 pl-3 placeholder:text-gray-800"
            required
          >
            <option value="" disabled selected>
              Seleccione la sede
            </option>
            <option value="sede1">Sede 1</option>
            <option value="sede2">Sede 2</option>
            <option value="sede3">Sede 3</option>
          </select>
        </div>
        <div className="w-full ">
          <textarea
            placeholder="Mensaje"
            id="mensaje"
            name="mensaje"
            className="bg-white border-none text-gray-900 text-sm rounded-lg block w-full py-3 pl-3 placeholder:text-gray-800"
          />
        </div>
        <input
          type="submit"
          value="¡Inscríbete ahora!"
          className="absolute -bottom-16 bg-azulLR text-white rounded-3xl py-1 px-5 xs:px-10 text-2xl font-[GothamBold] hover:bg-violetaLR transition-all duration-300 cursor-pointer"
        />
      </form>
    </div>
  )
}
