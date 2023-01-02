import { FunctionComponent } from "react";

interface PageProps {}

const tiles = [...new Array(12).keys()];
const Page: FunctionComponent<PageProps> = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {tiles.map((t, index) => (
        <div
          className="w-full h-60 bg-white text-black p-4 relative"
          key={index}
        >
          <div className="text-teal-600 text-lg">{index}</div>
          <div className="text-2xl font-semibold">Reel video</div>
          <div className="absolute flex bottom-0 bg-black/[0.5] left-0 w-full pl-4 py-2 text-white font-bold">
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
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
            38.7K
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
