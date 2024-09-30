import FormContactoRAC from "../FormContactoRAC/page"

export default function ContactanosRAC() {
  return (
    <div
      id="contactanos"
      className="w-full flex justify-center items-center py-10 bg-amarilloLR pb-64 bg-[url('/img/fondoContactanosResp.png')] sm:bg-[url('/img/fondoContactanos.png')] bg-left-bottom bg-no-repeat bg-contain"
    >
      <div className="w-10/12 flex flex-col lg:flex-row justify-center items-center lg:items-start">
        <div className="lg:w-6/12 relative flex flex-col">
          <p className="text-3xl sm:text-5xl text-violetaLR font-[GothamBold] text-center lg:text-start mb-10 lg:mb-0">
            ¡La extracurricular <br /> ideal{" "}
            <span className="text-azulLR">
              para las tardes <br />
              de tus hijos!
            </span>
          </p>
        </div>
        <div className="w-[280px] xs:w-[360px] sm:w-[600px] md:w-[700px] flex flex-col">
          {" "}
          <FormContactoRAC />
        </div>
      </div>
    </div>
  )
}
