"use client"
import { Select, Textarea, TextInput } from "flowbite-react"
import SendedMsg from "../SendedMsg/page"
import { useState } from "react"

export default function FormContactoRAC() {
  const [sended, setSended] = useState(false)
  const urlGS =
    "https://script.google.com/macros/s/AKfycbyihYNwVxdDAficE5DH7bIY0Fh0TxK27TwElzRU9aTs5Z8nlZNot3FDV8KAQ5kCZPmq/exec"
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    document.getElementById("btnEnviar").disabled = true

    try {
      await fetch(urlGS, { method: "POST", body: formData })
    } catch (error) {
      console.log(error)
    }

    document.getElementById("myForm").reset()
    document.getElementById("btnEnviar").disabled = false
    setSended(true)

    setTimeout(() => {
      setSended(false)
    }, 5000)
  }

  return (
    <div className="w-full flex items-center justify-center pb-20">
      <form
        onSubmit={handleSubmit}
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
            name="Ciudad"
            className="bg-white border-none text-gray-900 text-sm rounded-lg block w-full px-2.5 py-5  placeholder:text-gray-800"
            required
          />
          <input
            placeholder="Telefono"
            type="number"
            id="telefono"
            name="Telefono"
            className="bg-white border-none text-gray-900 text-sm rounded-lg block w-full px-2.5 py-5 placeholder:text-gray-800"
            required
          />
        </div>
        <div className="w-full ">
          <input
            placeholder="Correo Electrónico"
            type="email"
            id="email"
            name="Correo"
            className="bg-white border-none text-gray-900 text-sm rounded-lg block w-full px-2.5 py-5  placeholder:text-gray-800"
            required
          />
        </div>
        <div className="w-full ">
          <select
            aria-label="selecciona la sede"
            id="sede"
            name="Sede"
            className="bg-white border-none text-gray-900 text-sm rounded-lg block w-full py-3 pl-3 placeholder:text-gray-800"
            required
          >
            <option value="">Seleccione la sede</option>
            <option value="CCCT">
              {" "}
              Centro Ciudad Comercial Tamanaco (C.C.C.T)
            </option>
            <option value="Galerias Prados del este">
              Galerías Prados del Este
            </option>
            <option value="C.C Nayara - Puerto Ordaz">
              C.C Nayara - Puerto Ordaz
            </option>
          </select>
        </div>
        <div className="w-full ">
          <textarea
            placeholder="Mensaje"
            id="mensaje"
            name="Mensaje"
            className="bg-white border-none text-gray-900 text-sm rounded-lg block w-full py-3 pl-3 placeholder:text-gray-800"
          />
        </div>
        <input
          type="hidden"
          name="Origen"
          value="Landing Page Regreso a Clases"
        />
        <input type="hidden" value={new Date().toLocaleString()} name="fecha" />
        <input
          type="submit"
          value="¡Inscríbete ahora!"
          className="absolute -bottom-16 bg-azulLR text-white rounded-3xl py-1 px-5 xs:px-10 text-2xl font-[GothamBold] hover:bg-violetaLR transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-wait"
        />
        {sended && <SendedMsg />}
      </form>
    </div>
  )
}
