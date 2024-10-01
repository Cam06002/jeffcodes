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
    <div className="flex flex-row justify-between">
      <Link href={links.linkUrl}>{links.linkDescript}</Link>
      {links.linkTwo&&<Link href={links.linkTwo}>{links.descriptTwo}</Link>}
      {links.linkThree&&<Link href={links.linkThree}>{links.descriptThree}</Link>}
    </div>
  );
}
