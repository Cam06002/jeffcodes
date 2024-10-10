// import Head from "next/head";

import Languages from "./components/languages";
import Frameworks from "./components/frameworks";
import Cloud from "./components/cloud";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="font-Orbitron flex flex-col w-full">
      <head>
        <meta name="title" property='og:title' content='Jeff Codes'/>
        <meta name="image" property='og:image' content='../../public/images/colorCode.png'/>
        <meta name="description" property='og:description' content='Jeff Campbell - Portfolio'/>
        <meta name="url" property='og:url' content='https://jeffcodes.vercel.app'/>
      </head>
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
    </main>
  );
}
