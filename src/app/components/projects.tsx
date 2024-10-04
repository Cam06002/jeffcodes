import ProjectWrapper from "./projectWrapper"
import {linkBoxData} from "./linkBox"
import { IoLogoGithub, IoLink } from "react-icons/io5";
import {
  SiReact,
  SiFlutter,
  SiTailwindcss,
  SiDotnet,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si";

export default function Projects() {
  const worksBetterLinks: linkBoxData = {
    linkUrl: "https://github.com/JeffCEmploynet/worksbetter",
    linkDescript: <p className="flex flex-row align-middle">UI: <span className="text-xl ml-2"><IoLogoGithub /></span></p>,
    linkTwo: "https://github.com/JeffCEmploynet/WorksBetterAPI",
    descriptTwo: <p className="flex flex-row align-middle">API: <span className="text-xl ml-2"><IoLogoGithub /></span></p>,
  };

  const flutterTimeclockLinks: linkBoxData = {
    linkUrl: "https://github.com/JeffCEmploynet/flutter_time_clock",
    linkDescript: <p className="flex flex-row align-middle">UI: <span className="text-xl ml-2"><IoLogoGithub /></span></p>
  };

  const xTextLinks: linkBoxData = {
    linkUrl: "https://github.com/Cam06002/x-text",
    linkDescript: <p className="flex flex-row align-middle">UI: <span className="text-xl ml-2"><IoLogoGithub /></span></p>,
    linkTwo: "https://github.com/Cam06002/jeffing_server",
    descriptTwo: <p className="flex flex-row align-middle">API: <span className="text-xl ml-2"><IoLogoGithub /></span></p>,
    linkThree: "https://jeffingtext.web.app/",
    descriptThree: <p className="flex flex-row align-middle">App:<span className="text-2xl ml-2"><IoLink /></span></p>
  }

  return (
    <div className="flex flex-col m-4">
      <div className="flex flex-row justify-center">
        <h1 className="text-xl font-bold">Projects</h1>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h3 className="text-center text-lg">Public</h3>
          <ProjectWrapper
            title="WorksBetter"
            stack={<span className="flex flex-row justify-between"><SiNextdotjs/><SiDotnet/><SiTailwindcss/></span>}
            descript="Proof of Concept Staffing and Payroll Application"
            links={worksBetterLinks}
          />
          <ProjectWrapper
            title="XText"
            stack={<span></span>}
            descript="Full Stack journal application"
            links={xTextLinks}
          />
          <ProjectWrapper
            title="Flutter Timeclock"
            stack={<span></span>}
            descript="Customizable Punch Clock, created in Flutter"
            links={flutterTimeclockLinks}
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-center text-lg">Private</h3>
          <ProjectWrapper
            title="OAP Reconciliation Tool"
            stack={<span></span>}
            descript="Payment Reconciliation Tool"
          />
          <ProjectWrapper
            title="HQ App"
            stack={<span></span>}
            descript="Timecard Processing Application"
          />
          <ProjectWrapper
            title="Estimation Calculator"
            stack={<span></span>}
            descript="Gate Estimation tool, written in Python"
          />
        </div>
      </div>
    </div>
  )
}
