import Languages from "./components/languages";
import Frameworks from "./components/frameworks";
import Cloud from "./components/cloud";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div>
      <main className="font-Orbitron flex flex-row">
        <div className="flex flex-col border-r-2">
          <Languages />
          <Frameworks />
          <Cloud />
        </div>
        <div className="flex flex-col">
          <Projects />
        </div>
      </main>
    </div>
  );
}
