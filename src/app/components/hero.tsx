import Image from "next/image";
import Codeagon from "../../../public/images/codeagon.svg";


export default function Hero(){
  return(
    <div className="bg-gradient-to-r from-sky-300 to-red-300 w-full h-80 p-12 flex flex-row mb-8 justify-between">
      <div className="flex flex-col">
        <h1 className="text-gray-900/50 w-fit p-2 text-3xl mt-8 mb-4 font-bold">Hello, I'm Jeff Campbell</h1>
        <h3 className="text-gray-900/50 w-fit p-2 text-xl font-bold">Software Engineer and Web Developer</h3>
        <p className="text-gray-900/50 w-fit p-2">Focusing on reaching across the stack to produce performative web apps</p>
        <button className="bg-red-300 shadow-xl hover:shadow-3xl rounded text-sky-200 w-fit p-2 m-4 font-bold">
          <p className="drop-shadow">Contact Me</p>
        </button>
      </div>
      <div className="flex flex-col align-middle ml-24">
        <Image
          src={Codeagon}
          className="h-48 w-48 flex justify-center"
          alt="code brack in a hexagon"
          priority={false}
        />
      </div>
    </div>
  )
}