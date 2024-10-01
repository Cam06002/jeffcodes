import ProjectWrapper from "./project-wrapper"
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
    <div>
      <ProjectWrapper
        title="HQ App"
        descript="Timecard Processing Application"
      />
      <ProjectWrapper
        title="WorksBetter"
        descript="Proof of Concept Staffing and Payroll Application"
        links={worksBetterLinks}
      />
      <ProjectWrapper
        title="Flutter Timeclock"
        descript="Customizable Punch Clock, created in Flutter"
        links={flutterTimeclockLinks}
      />
      <ProjectWrapper
        title="OAP Reconciliation Tool"
        descript="Payment Reconciliation Tool"
      />
      <ProjectWrapper
        title="Estimation Calculator"
        descript="Gate Estimation tool, written in Python"
      />
      <ProjectWrapper
        title="XText"
        descript="Full Stack journal application"
        links={xTextLinks}
      />
    </div>
  )
}
