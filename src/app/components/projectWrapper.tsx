import LinkBox from "./linkBox";

export default function ProjectWrapper(
  {title, descript, stack, links} :
  {title: string, descript: string, stack: any, links?: any}
){
  return(
    <div className="flex flex-col mx-4 mb-4 mt-2 border-2 rounded align-middle justify-center p-2">
      <h2 className="font-bold text-lg justify-center flex">{title}</h2>
      <div className="flex flex-row">
        <p className="mr-2 text-xs">Tech Stack:</p>
        <span className="flex flex-row justify-between">{stack}</span>
      </div>
      <p className="text-xs flex justify-center mb-3">{descript}</p>
      {links&&<LinkBox
        links={links}
      />}
    </div>
  )
}

//add more - info button for each project
// allowing users to see detail info about project