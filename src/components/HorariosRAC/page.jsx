export default function HorariosRAC() {
  return (
    <div
      id="horarios"
      className="w-full flex flex-col justify-center items-center"
    >
      <div className="w-[270px] xs:w-[360px] sm:w-[600px] md:w-[700px] lg:w-[880px] bg-azulClaroLR rounded-3xl py-10 px-7 sm:px-14 flex flex-col font-[GothamBlack] mb-10 z-10">
        <h2 className="text-3xl xs:text-5xl text-violetaLR text-center mb-10">
          Horarios
        </h2>
        <div className="flex flex-col sm:flex-row mb-10">
          <div className="sm:w-6/12 flex flex-col items-center text-center text-xl lg:text-2xl tracking-wider mb-10 sm:mb-0">
            <h3 className="text-2xl lg:text-3xl text-azulLR tracking-normal mb-4">
              Lunes y Miércoles
            </h3>
            <p>2:00pm a 3:20pm</p>
            <p>3:30pm a 4:50pm</p>
            <p>5:00pm a 6:20pm</p>
          </div>
          <div className="sm:w-6/12 flex flex-col items-center text-center text-xl lg:text-2xl tracking-wider">
            <h3 className="text-2xl lg:text-3xl text-azulLR tracking-normal mb-4">
              Martes y Jueves
            </h3>
            <p>2:00pm a 3:20pm</p>
            <p>3:30pm a 4:50pm</p>
            <p>5:00pm a 6:20pm</p>
          </div>
        </div>
        <div className="flex  flex-col sm:flex-row">
          <div className="sm:w-6/12 flex flex-col items-center text-center text-xl lg:text-2xl tracking-wider mb-10 sm:mb-0">
            <h3 className="text-2xl lg:text-3xl text-azulLR tracking-normal mb-4">
              Viernes
            </h3>
            <p>9:00am a 12:00pm</p>
            <p>2:00pm a 5:00pm</p>
            <p>3:00pm a 6:00pm</p>
          </div>
          <div className="sm:w-6/12 flex flex-col items-center text-center text-xl lg:text-2xl tracking-wider">
            <h3 className="text-2xl lg:text-3xl text-azulLR tracking-normal mb-4">
              Sábados
            </h3>
            <p>9:00am a 12:00pm</p>
            <p>2:00pm a 5:00pm</p>
            <p>3:00pm a 6:00pm</p>
          </div>
        </div>
      </div>
      <a
        href="#contactanos"
        className="w-fit px-10 py-2 bg-violetaLR rounded-3xl inline-block text-white text-2xl font-[GothamBlack] hover:bg-azulLR hover:text-white transition-all duration-300 mb-10"
      >
        Consúltanos
      </a>
    </div>
  )
}
