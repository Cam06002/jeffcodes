import ProjectWrapper from "./project-wrapper"

export default function Projects() {
  return (
    <div>
      <ProjectWrapper
        title="HQ App"
        descript="Timecard Processing Application"
      />
      <ProjectWrapper
        title="WorksBetter"
        descript="Proof of Concept Staffing and Payroll Application"
        linkOne="https://github.com/JeffCEmploynet/worksbetter"
        linkTwo="https://github.com/JeffCEmploynet/WorksBetterAPI"
      />
      <ProjectWrapper
        title="Flutter Timeclock"
        descript="Customizable Punch Clock, created in Flutter"
        linkOne="https://github.com/JeffCEmploynet/flutter_time_clock"
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
        linkOne="https://github.com/Cam06002/x-text"
        linkTwo="https://jeffingtext.web.app/"
      />
    </div>
  )
}
