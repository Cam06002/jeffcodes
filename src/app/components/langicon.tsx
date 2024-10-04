export default function LangIcon(
    {icon, title} : {icon: any, title: string}
){
    return(
        <div className="flex flex-col justify-center m-2 w-28 h-16 align-middle rounded border-2 hover:bg-sky-500">
            <p className="font-bold text-2xl flex justify-center mb-2">{icon}</p>
            <p className="flex justify-center text-xs">{title}</p>
        </div>
    )
} 