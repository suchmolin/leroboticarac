import FormContactoRAC from "../FormContactoRAC/page"

export default function ContactanosRAC() {
  return (
    <div className="w-full flex justify-center items-center py-10 bg-amarilloLR pb-48 bg-[url('/img/fondoContactanos.png')] bg-left-bottom bg-no-repeat bg-contain">
      <div className="w-10/12 flex justify-center">
        <div className="w-6/12 relative flex flex-col">
          <p className="text-5xl text-violetaLR font-[GothamBold]">
            ¡La extracurricular <br /> ideal{" "}
            <span className="text-azulLR">
              para las tardes <br />
              de tus hijos!
            </span>
          </p>
        </div>
        <div className="w-[700px] flex flex-col">
          {" "}
          <FormContactoRAC />
        </div>
      </div>
    </div>
  )
}
