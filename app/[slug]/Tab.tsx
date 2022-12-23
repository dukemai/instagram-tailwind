'use client';

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FunctionComponent } from "react";

interface TabProps {

}

const Tab: FunctionComponent<TabProps> = ({ params }) => {
  return (<ul className="flex items-center justify-center gap-8 uppercase">
    <li>
      <Link className="py-4 block" href="/">Posts</Link>
    </li>
    <li>
      <Link className="py-4 block text-slate-400" href={`${params?.slug}/reels`}>Reels</Link>
    </li>
    <li>
      <Link className="py-4 block text-slate-400" href="guides">Guides</Link>
    </li>
    <li>
      <Link className="py-4 block text-slate-400" href="tagged">Tagged</Link>
    </li>
  </ul>);
}

export default Tab;