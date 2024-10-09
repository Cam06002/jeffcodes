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
  SiCsharp, 
  SiDart, 
  SiTypescript, 
  SiXaml,
  SiMicrosoftazure,
  SiMongodb,
  SiPython
} from "react-icons/si";

import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoFirebase
} from "react-icons/io5";
import { TbSql } from "react-icons/tb";

import Stack from "./stack";

export default function Projects() {
  const worksBetterLinks: linkBoxData = {
    linkUrl: "https://github.com/JeffCEmploynet/worksbetter",
    linkDescript: <p className="flex flex-row align-middle">UI: <span className="text-xl ml-2"><IoLogoGithub /></span></p>,
    linkTwo: "https://github.com/JeffCEmploynet/WorksBetterAPI",
    descriptTwo: <p className="flex flex-row align-middle">API: <span className="text-xl ml-2"><IoLogoGithub /></span></p>,
  };

  const worksbetterStack = <Stack
    iconList ={[
      {logo: <SiTypescript />, type: "lang"},
      {logo: <SiNextdotjs />, type: "frame"},
      {logo: <SiTailwindcss/>, type: "frame"},
      {logo: <SiCsharp />, type: "lang"},
      {logo: <SiDotnet />, type: "frame"},
      {logo: <SiMicrosoftazure/>, type: "cloud"},
      {logo: <TbSql/>, type: "lang"}
    ]}
  />;  

  const flutterTimeclockLinks: linkBoxData = {
    linkUrl: "https://github.com/JeffCEmploynet/flutter_time_clock",
    linkDescript: <p className="flex flex-row align-middle">UI: <span className="text-xl ml-2"><IoLogoGithub /></span></p>
  };

  const timeclockStack = <Stack
    iconList={[
      {logo: <SiDart/>, type: "lang"},
      {logo: <SiFlutter/>, type: "frame"},
    ]}
  />;

  const xTextLinks: linkBoxData = {
    linkUrl: "https://github.com/Cam06002/x-text",
    linkDescript: <p className="flex flex-row align-middle">UI: <span className="text-xl ml-2"><IoLogoGithub /></span></p>,
    linkTwo: "https://github.com/Cam06002/jeffing_server",
    descriptTwo: <p className="flex flex-row align-middle">API: <span className="text-xl ml-2"><IoLogoGithub /></span></p>,
    linkThree: "https://jeffingtext.web.app/",
    descriptThree: <p className="flex flex-row align-middle">App:<span className="text-2xl ml-2"><IoLink /></span></p>
  };

  const xTextStack = <Stack
    iconList={[
      {logo: <IoLogoJavascript/>, type: "lang"},
      {logo: <SiReact/>, type: "frame"},
      {logo: <SiNodedotjs/>, type: "frame"},
      {logo: <IoLogoCss3/>, type: "lang"},
      {logo: <SiMongodb/>, type: "cloud"},
      {logo: <IoLogoFirebase/>, type: "cloud"}
    ]}
  />;

  const oapStack = <Stack
    iconList={[
      {logo: <IoLogoJavascript/>, type: "lang"},
      {logo: <SiReact/>, type: "frame"},
      {logo: <IoLogoCss3/>, type: "lang"},
      {logo: <IoLogoHtml5/>, type: "lang"},
    ]}
  />

  const hpAppStack = <Stack
    iconList={[
      {logo: <IoLogoJavascript/>, type: "lang"},
      {logo: <SiReact/>, type: "frame"},
      {logo: <IoLogoCss3/>, type: "lang"},
      {logo: <SiCsharp/>, type: "lang"},
      {logo: <SiDotnet/>, type: "frame"},
      {logo: <SiXaml/>, type: "lang"},
      {logo: <SiPython/>, type: "lang"}
    ]}
  />

  const estimatorStack = <Stack
    iconList={[
      {logo: <SiPython/>, type:"lang"}
    ]}
  />


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
            stack={worksbetterStack}
            descript="Proof of Concept Staffing and Payroll Application"
            links={worksBetterLinks}
          />
          <ProjectWrapper
            title="XText"
            stack={xTextStack}
            descript="Full Stack journal application"
            links={xTextLinks}
          />
          <ProjectWrapper
            title="Flutter Timeclock"
            stack={timeclockStack}
            descript="Customizable Punch Clock, created in Flutter"
            links={flutterTimeclockLinks}
          />

          <h3 className="text-center text-lg">Private</h3>
          <ProjectWrapper
            title="OAP Reconciliation Tool"
            stack={oapStack}
            descript="Payment Reconciliation Tool"
            descriptTwo="Automated the procees by which 
             the accounting team was able to apply client payments to open 
             invoices, severly cutting down on time and energy needed for this task,
             and providing additional financial insights to management"
          />
          <ProjectWrapper
            title="HQ App"
            stack={hpAppStack}
            descript="Timecard Processing Application"
            descriptTwo="Created to ease hand-entry and calulation of
            client-submitted timecards. This application was built first in
            Python, then in C#, then in JavaScript to fulfill our changing needs."
          />
          <ProjectWrapper
            title="Estimation Calculator"
            stack={estimatorStack}
            descript="Gate Estimation tool, written in Python"
            descriptTwo="Created to make standard gate estimation more efficient by automating
            calculations based on various selections in the tool. Also eliminated errors from
            original spreadsheet calculations."
          />
        </div>
      </div>
    </div>
  )
}
