export default function LangIcon(
    {icon, title} : {icon: any, title: string}
){
  return(
    <div className="flex flex-col justify-center m-1 w-24 h-14 align-middle">
      <p className="font-bold text-xl flex justify-center mb-2">{icon}</p>
      <p className="flex justify-center text-xs text-white">{title}</p>
    </div>
  )
}  