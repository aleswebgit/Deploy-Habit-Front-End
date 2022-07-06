import React from 'react';
// import { Link } from 'react-router-dom';
import MentalHealthIcon from '../media/icons/MentalHealth'
import Eat from '../media/icons/Eat';
import Sport from '../media/icons/Sport';
import Sleep from '../media/icons/Sleep';


const Category = () => {

    // const [categories, setCategories] = useState([]);

    // const fetchData = async () => {
    //     const categoriesApi = await fetch('  -->URL CATEGORIES HERE<--  ')
    //     const categoriesJson = await categoriesApi.json()
    //     setCategories(categoriesApi)
    // }

    // useEffect( () => { 
    //     fetchData();    
    // }, [])

    const categories = ([
        {
            name: "Sueño",
            icon: <Sleep/>
        },{
            name: "Nutrición",
            icon: <Eat/>
        },{
            name: "Deporte",
            icon: <Sport/>
        }, {
            name: "Salud Mental",
            icon: <MentalHealthIcon/>
        }
    ]);

    return (
        <section className='grid grid-flow-col mx-auto'>
            {categories.map( category => {
                return (                        
                    <a href="/section">
                            <div className=" flex flex-col items-center justify-center bg-[#F8D1B4] w-[130px] aspect-square rounded-[35px]">
                                <div className="flex item-center justify-center">
                                    {category.icon}
                                </div>
                                <p className="font-['Titan one'] text-[#D45C33]">
                                    {category.name}
                                </p>
                            </div>
                    </a>
                )
            })}
        </section>
    )
}

export default Category