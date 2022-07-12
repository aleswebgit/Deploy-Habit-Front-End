const Advice = () => {
  return (
    <section className="flex flex-col items-center bg-[#E57A56] p-10 space-y-4">
      <h2 className="text-white font-extrabold uppercase">HACER CONSULTA</h2>
      <div className="bg-[#F8D1B4] p-5 rounded-3xl text-center space-y-4">
        <p className="text-sm text-[#BC4E2A]">
          Si tienes alguna duda, y quieres la respuesta de forma personalizada, puedes escribirnos en el siguiente enlace:
        </p>
        <a 
          href="mailto:yourwebsolutions3000@gmail.com?subject=Consulta web Habitos"
          className="bg-white rounded-3xl text-sm sm:text-lg font-bold py-1 px-4 text-[#BC4E2A]"
        >
          Hacer Consulta
        </a>
      </div>
    </section>
  )
}

export default Advice
