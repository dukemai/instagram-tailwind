"use client";

import Link from "next/link";
import { FunctionComponent, useState } from "react";
import Tab from "./Tab";
import { usePathname } from "next/navigation";
import MoreMenu from "./MoreMenu";

interface HeaderProps {
  slug?: string;
  selectedPage?: "posts" | "reels" | "guides" | "tagged";
}

const showcases = [
  "summer",
  "winter",
  "spring",
  "fall",
  "christmas",
  "user interface",
];
const paths = [
  { label: "Posts", path: "" },
  { label: "Reels", path: "/reels" },
  { label: "Guides", path: "/guides" },
  { label: "Tagged", path: "/tagged" },
];

const Header: FunctionComponent<HeaderProps> = ({ slug, selectedPage }) => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-8 flex items-center">
        <div className="rounded-full my-8 mx-16 border border-2">
          <div className="m-1 w-32 h-32 bg-orange-500 rounded-full inline-flex items-center justify-center">
            avtar
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <h2 className="text-2xl">colours.cafe</h2>
            <button className="ml-4 bg-white text-black py-1 px-2 rounded-md text-sm font-bold">
              Following
            </button>
            <button className="ml-2 bg-white text-black py-1 px-2 rounded-md text-sm font-bold">
              Message
            </button>
            <button className="ml-2 bg-white text-black py-1 px-2 rounded-md text-sm font-bold">
              Add
            </button>
            <button onClick={() => setOpen(true)} className="ml-2 py-1 px-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
          <MoreMenu open={open} onClose={() => setOpen(false)} />
          <div className="flex mt-4 gap-6">
            <div>
              <span className="font-bold">1,060</span>
              <span className="ml-2">posts</span>
            </div>
            <div>
              <span className="font-bold">341k</span>
              <span className="ml-2">followers</span>
            </div>
            <div>
              <span className="font-bold">237</span>
              <span className="ml-2">following</span>
            </div>
          </div>
          <div className="mt-4 font-bold">Colours Cafe</div>
          <div className="text-slate-400">Product/service</div>
          <div>Daily Colour palettes</div>
          <div>
            Tag your work:{" "}
            <a href="#" className="text-slate-400">
              #xxxx
            </a>
          </div>
        </div>
      </div>
      <ul className="mt-8 flex gap-6">
        {showcases.map((showcase, key) => (
          <li className="text-center overflow-hidden w-20" key={key}>
            <div className="border rounded-full h-20 p-1">
              <div className="w-full h-full bg-yellow-500 rounded-full"></div>
            </div>
            <div className="mt-2 whitespace-nowrap text-ellipsis w-full overflow-hidden">
              {showcase}
            </div>
          </li>
        ))}
      </ul>
      <div className="border-t mt-10 border-slate-400">
        <ul className="flex items-center justify-center gap-8 uppercase text-sm font-semibold">
          {paths.map((path) => {
            const route = `/${slug}${path.path}`;
            return (
              <li className="relative" key={path.path}>
                {pathName === route && (
                  <span
                    style={{ marginTop: -1 }}
                    className="absolute border-t border-white w-full"
                  ></span>
                )}
                <Link
                  className={`py-4 block ${
                    pathName === route ? "" : "text-slate-400"
                  }`}
                  href={route}
                >
                  {path.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Header;
