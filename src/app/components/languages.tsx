import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoPython,
} from "react-icons/io5";
import { SiCsharp, SiDart, SiTypescript, SiXaml } from "react-icons/si";
import { TbSql } from "react-icons/tb";

import LangIcon from "./langicon";

export default function Languages() {
  return (
    <div>
      <LangIcon icon={<IoLogoJavascript />} title="Javascript" />
      <LangIcon icon={<IoLogoCss3 />} title="CSS"/>
      <LangIcon icon={<IoLogoHtml5 />} title="HTML"/>
      <LangIcon icon={<SiTypescript />} title="TypeScript"/>
      <LangIcon icon={<TbSql />} title="SQL"/>
      <LangIcon icon={<SiCsharp />} title="C#"/>
      <LangIcon icon={<SiXaml />} title="XAML" />
      <LangIcon icon={<IoLogoPython />} title="Python"/>
      <LangIcon icon={<SiDart />} title="Dart"/>
    </div>
  );
}
