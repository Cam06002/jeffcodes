import Image from "next/image";
import Codeagon from "../../../public/images/codeagon.svg";

export default function Hero(){
  return(
    <div className="bg-gradient-to-r from-sky-300 to-red-300 w-full h-96 p-12 flex flex-row">
      <div className="flex flex-col">
        <h1 className="bg-gray-900/50 w-fit p-2">Hello, I'm Jeff Campbell</h1>
        <p>Thank you for visiting my website</p>
        <p>See my skills, work, and experience below,
          click the envelope in the header to contact me,
          or visit the links in the footer to see more!
        </p>
      </div>
      <div className="flex flex-col w-1/2 justify-center align-middle ml-24">
        <Image
          src={Codeagon}
          className="h-48 w-48 flex justify-center"
          alt="code brack in a hexagon"
        />
      </div>
    </div>
  )
}