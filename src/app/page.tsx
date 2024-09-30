import Languages from "./components/languages";
import Frameworks from "./components/frameworks";

export default function Home() {
  return (
    <div>
      <main className="font-Orbitron">
        <Languages />
        <Frameworks />
      </main>
    </div>
  );
}
