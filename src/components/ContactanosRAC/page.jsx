import FormContactoRAC from "../FormContactoRAC/page"

export default function ContactanosRAC() {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="w-10/12 flex justify-center">
        <div className="w-5/12 relative flex flex-col">
          <p className="text-5xl text-azulLR font-[GothamBold]">
            ¡Inscríbete ahora!
          </p>
          <h2 className="text-6xl flex flex-col  text-violetaLR font-[BurgerElbow]">
            AÑO ESCOLAR
            <span className="text-5xl text-azulLR font-[GothamBold]">
              2024 - 2025
            </span>
          </h2>
        </div>
        <div className="w-6/12 flex flex-col">
          <FormContactoRAC />
        </div>
      </div>
    </div>
  )
}
