export default function LangIcon(
    {icon, title} : {icon: any, title: string}
){
    return(
        <div className="flex flex-col justify-center">
            <span>{icon}</span>
            <p>{title}</p>
        </div>
    )
}