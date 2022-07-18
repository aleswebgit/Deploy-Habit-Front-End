const CategoryButton = ({category}) => {  
  return (
    <div className={`${category.bgColor} flex lg:hidden flex-col items-center justify-center w-[140px] min-w-[140px] h-[140px] sm:w-[500px] rounded-3xl`}>
      <div className="flex item-center justify-center ">
        {category.icon}
      </div>
      <p className={`${category.color} my-2 font-['Titan one']`}>
        {category.name}
      </p>
    </div>
  )
}

export default CategoryButton