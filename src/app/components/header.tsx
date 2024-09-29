import Image from "next/image";
import UFO from "../../../public/images/UFO.png";

export default function Header() {
  return (
    <div>
      <nav className="flex flex row h-fill w-fill p-4 align-center">
        <div className="flex">
          <Image src={UFO} alt="Image of a UFO" height={50} width={50} />
          <p className="font-Orbitron pl-4 text-lg font-bold">Jeff Codes</p>
        </div>
        <div className="flex">
          <p className="font-Orbitron pl-4 text-lg font-bold">Skills</p>
          <p className="font-Orbitron pl-4 text-lg font-bold">Projects</p>
          <p className="font-Orbitron pl-4 text-lg font-bold">Contact</p>
        </div>
      </nav>
    </div>
  );
}
