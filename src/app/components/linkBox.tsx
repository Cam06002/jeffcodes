import Link from "next/link";

export type linkBoxData = {
  linkUrl: string;
  linkDescript: string;
  linkTwo?: string;
  descriptTwo?: string;
  linkThree?: string;
  descriptThree?: string;
}

export default function Linkbox({links} : {links: linkBoxData}) {
  return (
    <div className="flex flex-row justify-center align-middle">
      <Link 
        href={links.linkUrl}
        className="hover:bg-slate-900 px-2 text-sky-500"
      >{links.linkDescript}</Link>

      {links.linkTwo&&<Link 
        href={links.linkTwo}
        className="hover:bg-slate-900 px-4 text-sky-500"
      >{links.descriptTwo}</Link>}

      {links.linkThree&&<Link 
        href={links.linkThree}
        className="hover:bg-slate-900 px-2 text-sky-500"
      >{links.descriptThree}</Link>}
    </div>
  );
}
