import { Link } from 'react-router-dom'
import MentalHealthIcon from '../media/icons/MentalHealth'
import Eat from '../media/icons/Eat'
import Sport from '../media/icons/Sport'
import Sleep from '../media/icons/Sleep'


const CategoryButton = () => {
  
  const categories = ([
    {
      id: 1,
      name: 'Sueño',
      icon: <Sleep/>,
      slug: 'sueno',
      color: 'text-[#FDF6EC]',
      bgColor: 'bg-[#FECF5E]'
    },{
      id: 2,
      name: 'Nutrición',
      icon: <Eat/>,
      slug: 'nutricion',
      color: 'text-[#D45C33]',
      bgColor: 'bg-[#F8D1B4]'
    },{
      id: 3,
      name: 'Deporte',
      icon: <Sport/>,
      slug: 'deporte',
      color: 'text-[#D45C33]',
      bgColor: 'bg-[#F8D1B4]'
    }, {
      id: 4,
      name: 'Salud Mental',
      icon: <MentalHealthIcon/>,
      slug: 'saludmental',
      color: 'text-[#FDF6EC]',
      bgColor: 'bg-[#FECF5E]'
    }
  ])

  return (
    <section className=' grid grid-cols-2 p-6 '>
      {categories.map( category => {
        return (                        
          <Link to={`/category/${category.id}`} key={category.name} className='flex justify-center py-3 font-bold '>
            <div className={`${category.bgColor} flex flex-col items-center justify-center w-[140px] min-w-[140px] h-[140px] sm:w-[100px] rounded-3xl`}>
              <div className="flex item-center justify-center ">
                {category.icon}
              </div>
              <p className={`${category.color} my-2 font-['Titan one']`}>
                {category.name}
              </p>
            </div>
          </Link>
        )
      })}
    </section>
  )
}

export default CategoryButton