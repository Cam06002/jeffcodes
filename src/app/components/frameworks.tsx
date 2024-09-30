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
    <div>
        <LangIcon icon={<SiReact />} title="React.js"/>
        <LangIcon icon={<SiNodedotjs />} title="Node.js"/>
        <LangIcon icon={<SiNextdotjs />} title="Next.js"/>
        <LangIcon icon={<SiTailwindcss />} title="TailwindCSS"/>
        <LangIcon icon={<SiDotnet />} title=".Net"/>
        <LangIcon icon={<SiFlutter />} title="Flutter.js"/>
    </div>
  )
}
