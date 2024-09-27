import Image from "next/image";
import UFO from "../../../public/images/UFO.png";

export default function Header() {
  return (
    <div>
      <nav className="flex flex row h-fill w-fill p-4 align-center">
        <Image src={UFO} alt="Image of a UFO" height={50} width={50} />
        <p className="font-white">Jeff Codes</p>
      </nav>
    </div>
  );
}
