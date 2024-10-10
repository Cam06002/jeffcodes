import Head from "next/head";

import Languages from "./components/languages";
import Frameworks from "./components/frameworks";
import Cloud from "./components/cloud";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="font-Orbitron flex flex-col w-full">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Jeff Campbell - Portfolio</title>
        <meta
          name="description"
          content="Check out the portfolio website for Jeff Campbell!"
          key="desc"
        />
      </Head>
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
