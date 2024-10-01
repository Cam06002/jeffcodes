import Languages from "./components/languages";
import Frameworks from "./components/frameworks";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div>
      <main className="font-Orbitron flex flex-row">
        <div className="flex flex-col">
          <Languages />
          <Frameworks />
        </div>
        <div className="flex flex-col">
          <Projects />
        </div>
      </main>
    </div>
  );
}
