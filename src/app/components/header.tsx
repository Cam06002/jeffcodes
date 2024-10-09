import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export default function Header() {
  const openBracket = "<";
  const namer = "Jeff Campbell";
  const closeBracket = "/>";

  const titleHead = 
  <span className="flex flex-row align-middle justify-center">
    <span className="text-xl mr-2 text-sky-300">{openBracket}</span>
    <span className="text- mt-1">{namer}</span>
    <span className="text-xl ml-2 text-sky-300">{closeBracket}</span>
  </span>

  return (
    <div>
      <nav className="flex flex row h-fill w-fill px-4 py-2 align-center justify-between font-Orbitron">
        <div className="flex">
          <Link 
            className="font-Orbitron pl-4 font-bold align-text-bottom"
            href={"/"}
          >{titleHead}</Link>
        </div>
        <div className="flex">
          <Link 
            className="pl-4 text-3xl font-bold"
            href={"./contact"}
          ><FaEnvelope /></Link>
        </div>
      </nav>
    </div>
  );
}
