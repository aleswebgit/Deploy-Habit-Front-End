import React from 'react'

function SectionsComponent({children,text, onClick}){
  return(
    <button 
      className = "flex bg-[#F8D1B4] rounded-3xl w-[336px] justify-center text-[#E57A56] p-2 m-auto my-8"
      onClick = { onClick }
      text ="subapartado uno">
      {children}
    </button>
  )
}

export default SectionsComponent