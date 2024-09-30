

export default function ProjectWrapper(
  {title, descript, linkOne, linkTwo} :
  {title: string, descript: string, linkOne?: string, linkTwo?: string}
){
  return(
    <div className="flex flex-col m-4 border-2 rounded align-middle justify-center p-2">
      <h2 className="font-bold text-lg justify-center flex">{title}</h2>
      <p className="flex justify-center">{descript}</p>
      <p className="flex justify-center">{linkOne}</p>
      <p className="flex justify-center">{linkTwo}</p>
    </div>
  )
}