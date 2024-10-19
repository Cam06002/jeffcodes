import Image from "next/image";

import ColorCode from "../../public/images/colorCode.png";
import Languages from "./components/languages";
import Frameworks from "./components/frameworks";
import Cloud from "./components/cloud";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="font-Orbitron flex flex-col w-full">
      <head>
        <meta name="title" property='og:title' content='Jeff Codes'/>
        <meta name="image" property='og:image' content='https://jeffcodes.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcolorCode.3d4a7aa1.png&w=3840&q=75'/>
        <meta name="description" property='og:description' content='Check out my portfolio website! A brief overview of my skills, projects, and experience.'/>
        <meta name="url" property='og:url' content='https://jeffcodes.vercel.app'/>
      </head>
      <div className="hidden">
        <Image
          src={ColorCode}
          alt="colorful zeros and ones on a black background"
        />
      </div>
      <Hero />
      <div className="flex flex-col max-w-full md:flex-row">
        <div className="flex flex-row flex-wrap md:flex-col md:justify-start justify-center border-r-2 w-fit">
          <Languages />
          <Frameworks />
          <Cloud />
        </div>
        <div className="flex md:flex-col border-r-2 md:w-1/2">
          <Projects />
        </div>
        <div className="flex md:flex-col">
          <Experience />
        </div>
      </div>
    </div>
  );
}
