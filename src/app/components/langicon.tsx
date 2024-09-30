export default function LangIcon(
    {icon, title} : {icon: any, title: string}
){
    return(
        <div className="flex flex-col justify-center m-2 w-32 h-20 align-middle rounded border-2 hover:bg-sky-500">
            <p className="font-bold text-4xl flex justify-center">{icon}</p>
            <p className="flex justify-center">{title}</p>
        </div>
    )
}