import { Link } from 'react-router-dom'
import MentalHealthIcon from '../media/icons/MentalHealth'
import Eat from '../media/icons/Eat'
import Sport from '../media/icons/Sport'
import Sleep from '../media/icons/Sleep'
import CategoryButton from './CategoryButton'
import CategoryDesktopButton from './CategoryDesktopButton'

const CategoryData = () => {
  const categories = ([
    {
      id: 1,
      name: 'Sueño',
      icon: <Sleep/>,
      slug: 'sueno',
      color: 'text-[#FDF6EC]',
      bgColor: 'bg-[#FECF5E]',
      description: 'Lorem asjdalla asdjaj jsdlajqla sjdaldjla dkasjda dskadjlaa jdjfn fhsj fhssalkds.'
    },{
      id: 2,
      name: 'Nutrición',
      icon: <Eat/>,
      slug: 'nutricion',
      color: 'text-[#D45C33]',
      bgColor: 'bg-[#F8D1B4]',
      description: 'Lorem asjdalla asdjaj jsdlajqla sjdaldjla dkasjda dskadjlaa jdjfn fhsj fhssalkds.'
    },{
      id: 3,
      name: 'Deporte',
      icon: <Sport/>,
      slug: 'deporte',
      color: 'text-[#D45C33]',
      bgColor: 'bg-[#F8D1B4]',
      description: 'Lorem asjdalla asdjaj jsdlajqla sjdaldjla dkasjda dskadjlaa jdjfn fhsj fhssalkds.'
    }, {
      id: 4,
      name: 'Salud Mental',
      icon: <MentalHealthIcon/>,
      slug: 'saludmental',
      color: 'text-[#FDF6EC]',
      bgColor: 'bg-[#FECF5E]',
      description: 'Lorem asjdalla asdjaj jsdlajqla sjdaldjla dkasjda dskadjlaa jdjfn fhsj fhssalkds.'
    }
  ])

  return (
    <section className='grid grid-cols-2 p-6 gap-6'>
      {categories.map( category => {
        return (
          <Link to={`/category/${category.id}`} key={category.name} className='flex justify-center font-bold'>
            <CategoryButton category={category} />
            <CategoryDesktopButton category={category} />
          </Link>
        )
      })}
    </section>
  )
}

export default CategoryData