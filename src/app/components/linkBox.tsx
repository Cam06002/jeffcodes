import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type linkBoxData = {
  linkUrl: string;
  linkDescript: any;
  linkTwo?: string;
  descriptTwo?: any;
  linkThree?: string;
  descriptThree?: any;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Linkbox({links} : {links: linkBoxData}) {
  return (
    <div className="flex flex-row justify-center align-middle">
      <Link 
        href={links.linkUrl}
        className="hover:bg-slate-900 px-2 text-sky-300"
      >{links.linkDescript}</Link>

      {links.linkTwo&&<Link 
        href={links.linkTwo}
        className="hover:bg-slate-900 px-4 text-red-300"
      >{links.descriptTwo}</Link>}

      {links.linkThree&&<Link 
        href={links.linkThree}
        className="hover:bg-slate-900 px-2 text-lime-300"
      >{links.descriptThree}</Link>}
    </div>
  );
}
