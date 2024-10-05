import LinkBox from "./linkBox";

export default function ProjectWrapper(
  {title, descript, stack, links, descriptTwo} :
  {title: string, descript: string, stack: any, links?: any, descriptTwo?: string}
){
  return(
    <div className="flex flex-col mx-4 mb-4 mt-2 border-2 rounded align-middle justify-center p-2 w-96">
      <h2 className="font-bold text-lg justify-center flex">{title}</h2>
      <div className="flex flex-row align-baseline mb-3">
        <p className="mr-2 my-2 text-xs">Tech Stack:</p>
        <span className="flex flex-row justify-between">{stack}</span>
      </div>
      <p className="text-sm flex justify-center mb-3">{descript}</p>
      {links&&<LinkBox
        links={links}
      />}
      {descriptTwo&&<p className="text-sm flex mb-3 flex-wrap">{descriptTwo}</p>}
    </div>
  )
}

//add more - info button for each project
// allowing users to see detail info about project