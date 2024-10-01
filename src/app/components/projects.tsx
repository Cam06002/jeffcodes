import ProjectWrapper from "./projectWrapper"
import {linkBoxData} from "./linkBox"

export default function Projects() {
  const worksBetterLinks: linkBoxData = {
    linkUrl: "https://github.com/JeffCEmploynet/worksbetter",
    linkDescript: "Front End Code",
    linkTwo: "https://github.com/JeffCEmploynet/WorksBetterAPI",
    descriptTwo: "Back End Code",
  };

  const flutterTimeclockLinks: linkBoxData = {
    linkUrl: "https://github.com/JeffCEmploynet/flutter_time_clock",
    linkDescript: "Flutter Code Repo"
  };

  const xTextLinks: linkBoxData = {
    linkUrl: "https://github.com/Cam06002/x-text",
    linkDescript: "Front End Code",
    linkTwo: "https://github.com/Cam06002/jeffing_server",
    descriptTwo: "Back End Code",
    linkThree: "https://jeffingtext.web.app/",
    descriptThree: "Live Web App"
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
            descript="Proof of Concept Staffing and Payroll Application"
            links={worksBetterLinks}
          />
          <ProjectWrapper
            title="XText"
            descript="Full Stack journal application"
            links={xTextLinks}
          />
          <ProjectWrapper
            title="Flutter Timeclock"
            descript="Customizable Punch Clock, created in Flutter"
            links={flutterTimeclockLinks}
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-center text-lg">Private</h3>
          <ProjectWrapper
            title="OAP Reconciliation Tool"
            descript="Payment Reconciliation Tool"
          />
          <ProjectWrapper
            title="HQ App"
            descript="Timecard Processing Application"
          />
          <ProjectWrapper
            title="Estimation Calculator"
            descript="Gate Estimation tool, written in Python"
          />
        </div>
      </div>
    </div>
  )
}
