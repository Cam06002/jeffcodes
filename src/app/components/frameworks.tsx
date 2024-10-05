import {
  SiReact,
  SiFlutter,
  SiTailwindcss,
  SiDotnet,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si";
import LangIcon from "./langicon";

export default function Frameworks() {
  return (
    <div className="flex flex-col m-4 text-lime-300">
      <div className="flex flex-row justify-center">
        <h1 className="font-bold text-white text-xl mb-2">Frameworks</h1>
      </div>
      <div className="flex flex-row justify-center">
        <LangIcon icon={<SiReact />} title="React.js"/>
        <LangIcon icon={<SiNodedotjs />} title="Node.js"/>
        <LangIcon icon={<SiNextdotjs />} title="Next.js"/>
      </div>
      <div className="flex flex-row justify-center">
        <LangIcon icon={<SiTailwindcss />} title="TailwindCSS"/>
        <LangIcon icon={<SiDotnet />} title=".Net"/>
        <LangIcon icon={<SiFlutter />} title="Flutter.js"/>
      </div>
    </div>
  )
}
