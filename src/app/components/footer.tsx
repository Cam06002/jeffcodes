import Link from "next/link";
import { MdOutlineCopyright } from "react-icons/md";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between text-sky-500 text-xs align-middle p-2 border-t-2 border-slate-500 max-w-full">
      <FooterLinkPair
        title="Social"
        link="https://www.linkedin.com/in/jeff--campbell"
        descript="LinkedIn"
        linkTwo="https://stackoverflow.com/users/14404801/cam06002"
        descriptTwo="Stack Overflow"
      />

      <FooterLinkPair
        title="GitHub"
        link="https://github.com/Cam06002"
        descript="Personal GitHub"
        linkTwo="https://github.com/JeffCEmploynet"
        descriptTwo="Professional GitHub"
      />

      <div className="flex flex-row text-white w-80 align-middle">
        <p className="text-sm"><MdOutlineCopyright /></p>
        <p>2024 Jeff Campbell</p>
      </div>
    </div>
  )
}

function FooterLinkPair({
  title,
  link,
  descript,
  linkTwo,
  descriptTwo,
}: {
  title: string;
  link: string;
  descript: string;
  linkTwo: string;
  descriptTwo: string;
}) {
  return (
    <div className="flex flex-col w-full px-10">
      <div className="flex flex-row justify-start text-sky-300 align-middle">
        <p className="text-white text-sm mr-2">{title}:</p>
        <Link
          href={link}
          className="underline decoration-sky-500 mx-2"
        >{descript}</Link>
        <Link
          href={linkTwo}
          className="underline decoration-sky-500 mx-2"
        >{descriptTwo}</Link>
      </div>
    </div>
  )
}
