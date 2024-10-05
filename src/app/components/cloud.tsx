import {SiMicrosoftazure, SiMongodb} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import LangIcon from "./langicon";

export default function Cloud(){
  return(
    <div className="flex flex-col m-4 text-red-300">
      <div className="flex flex-row justify-center">
        <h1 className="font-bold text-white text-xl mb-2">Cloud Competencies</h1>
      </div>
      <div className="flex flex-row justify-center">
        <LangIcon icon={<SiMicrosoftazure />} title="Auzre"/>
        <LangIcon icon={<SiMongodb />} title="MongoDB"/>
        <LangIcon icon={<IoLogoFirebase />} title="Firebase"/>
      </div>
    </div>
  )
}