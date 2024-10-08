import { FaEnvelope } from "react-icons/fa";

export default function Header() {
  let openBracket = "<";
  let namer = "Jeff Campbell";
  let closeBracket = "/>";

  let titleHead = 
  <span className="flex flex-row align-middle justify-center">
    <span className="text-xl mr-2 text-sky-300">{openBracket}</span>
    <span className="text- mt-1">{namer}</span>
    <span className="text-xl ml-2 text-sky-300">{closeBracket}</span>
  </span>

  return (
    <div>
      <nav className="flex flex row h-fill w-fill px-4 py-2 align-center justify-between font-Orbitron">
        <div className="flex">
          <p className="font-Orbitron pl-4 font-bold align-text-bottom">{titleHead}</p>
        </div>
        <div className="flex">
          <p className="pl-4 text-3xl font-bold"><FaEnvelope /></p>
        </div>
      </nav>
    </div>
  );
}
