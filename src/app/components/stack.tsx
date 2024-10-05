import { Component } from "react"

export default function Stack(
  {iconList} : {iconList: Array<any>}
){
  return(
    <span className="flex flex-row justify-between my-2">
      {iconList.map((icon:any)=>{
        return(
          <span key={icon.type} 
            className={
              `mr-2 
              ${icon.type === "lang" ? "text-sky-300" : 
                icon.type === "frame" ? "text-lime-300":
                "text-red-300"
              }`
            }
          >
            {icon.logo}
          </span>
        );
      })}
    </span>
  )
}