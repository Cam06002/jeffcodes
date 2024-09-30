import Languages from "./components/languages";
import Frameworks from "./components/frameworks";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div>
      <main className="font-Orbitron">
        <Languages />
        <Frameworks />
        <Projects />
      </main>
    </div>
  );
}
