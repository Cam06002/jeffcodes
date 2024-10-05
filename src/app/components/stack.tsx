import { Component } from "react"

export default function Stack(
  {iconList} : {iconList: Array<any>}
){
  return(
    <span className="flex flex-row justify-between">
      {iconList.map((icon:any)=>{
        return(
          <span key={icon} className="mr-2">
            {icon}
          </span>
        );
      })}
    </span>
  )
}