const CategoryDesktopButton = ({category}) => {
  return (
    <div className="hidden lg:block box-border h-80 w-100 p-10 space-y-7 border-2 border-[#BC4E2A] rounded-2xl shadow-md shadow-[#BC4E2A]/30">
      <div className={`${category.bgColor} flex flex-col items-center justify-center bg-[#F8D1B4] w-[130px] aspect-square rounded-[35px] mx-auto`}>
        <div className="flex item-center justify-center ">
          {category.icon}
        </div>
        <p className={`${category.color} my-2 font-['Titan one']`}>
          {category.name}
        </p>
      </div>

      <p className="text-center">
        {category.description}
      </p>
    </div>
  )
}

export default CategoryDesktopButton