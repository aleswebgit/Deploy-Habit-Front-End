
function SectionButton({
  title,
  onClick
}){
  return(
    <button 
      className = "flex bg-[#F8D1B4] rounded-3xl w-[336px] justify-center text-[#E57A56] p-4 m-auto my-8 mt-3 mb-3"
      onClick = { onClick }>
      {title}
    </button>
  )
}

export default SectionButton