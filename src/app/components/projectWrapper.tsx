import LinkBox, { linkBoxData } from "./linkBox";

export default function ProjectWrapper(
  {title, descript, links} :
  {title: string, descript: string, links?: any}
){
  return(
    <div className="flex flex-col m-4 border-2 rounded align-middle justify-center p-2">
      <h2 className="font-bold text-lg justify-center flex">{title}</h2>
      <p className="text-xs flex justify-center mb-3">{descript}</p>
      {links&&<LinkBox
        links={links}
      />}
    </div>
  )
}

//add more - info button for each project
// allowing users to see detail info about project