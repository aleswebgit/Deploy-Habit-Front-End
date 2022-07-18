import Navbar  from '../Components/Navbar'
import Arrow  from '../media/icons/Arrow'


function AboutUs(){
  return(
    <>
      <Navbar/>
      <h1 className='flex justify-center text-5xl text-center py-2 m-8 text-[#BC4E2A] uppercase'>SOBRE NOSOTROS</h1>
      <div className="bg-[#E57A56] m-auto rounded-3xl p-5 sm:max-w-[700px] sm:m-9 text-[#FDF6EC] font-medium">
        <p className="text-center">
        Cáritas Diocesana de Sant Feliu formamos parte de la Acción Social de la Iglesia en la
        Diócesis de Sant Feliu de Llobregat. Extendemos la mano a las personas en riesgo de
        exclusión, con el fin de ayudarlas en su promoción y desarrollo integral, sensibilizamos
        la sociedad y promocionamos la justicia global, desde la dignidad, la justicia social y la
        solidaridad.
        Acogemos y trabajamos con las personas en situación de pobreza y necesidad, para
        que sean protagonistas de su propio desarrollo integral, desde el compromiso de la
        comunidad cristiana. Incluye la acción social, la sensibilización de la sociedad y la
        denuncia de las situaciones de injusticia con hechos y palabras para conseguir un
        mundo más justo y solidario.
        Somos una entidad sin ánimo de lucro y nuestra financiación es sobre todo de carácter
        privado, recibimos mayoritariamente el apoyo económico de personas que confían en
        la labor solidaria que realizamos.
        Nuestros ejes estratégicos son el tener a la persona como centro de la intervención; el
        amor como motor; la iglesia como signo; el conocimiento de las problemáticas
        sociales; la sostenibilidad y la capacidad de adaptación dentro de la sociedad y de
        transformación de la misma a partir de un modelo de economía solidaria.
        </p>
      </div>
      <div className='m-4'>
        <Arrow />
      </div>
    </>
  )
}

export default AboutUs