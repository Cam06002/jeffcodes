export default function Header() {
  let openBracket = "<";
  let namer = "Jeff Codes";
  let closeBracket = "/>";

  let titleHead = 
  <span className="flex flex-row align-middle justify-center">
    <span className="text-xl mr-2 text-sky-300">{openBracket}</span>
    <span className="text- mt-1">{namer}</span>
    <span className="text-xl ml-2 text-sky-300">{closeBracket}</span>
  </span>

  return (
    <div>
      <nav className="flex flex row h-fill w-fill p-4 align-center font-Orbitron">
        <div className="flex">
          <p className="font-Orbitron pl-4 font-bold align-text-bottom">{titleHead}</p>
        </div>
        <div className="flex">
          <p className="pl-4 text-lg font-bold">Skills</p>
          <p className="pl-4 text-lg font-bold">Projects</p>
          <p className="pl-4 text-lg font-bold">Contact</p>
        </div>
      </nav>
    </div>
  );
}
