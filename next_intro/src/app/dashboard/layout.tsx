import React from 'react'

export default function layout(
   {
    children,
    sidebar,
    mainbar

}:{
    children:React.ReactNode,
    sidebar:React.ReactNode,
    mainbar:React.ReactNode
}
) {
  return (
    <div>
       <div className=" flex flex-row bg-gray-500 flex-wrap">
             <div className=" w-1/4 bg-red-600">
                {sidebar}
             </div>
             <div className=" w-3/4 ">
                {mainbar}
                {children}
             </div>
       </div>
    </div>
  )
}
