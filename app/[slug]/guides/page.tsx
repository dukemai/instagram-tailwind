import { FunctionComponent } from "react";

interface PageProps {}

const tiles = [...new Array(4).keys()];

const Page: FunctionComponent<PageProps> = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {tiles.map((t, index) => (
        <div
          className="w-full h-60 bg-white text-black p-4 relative"
          key={index}
        >
          <div className="text-2xl font-semibold">Guide posts</div>
          <div className="absolute bottom-0 bg-black/[0.5] left-0 w-full pl-4 py-2 text-white">
            <div className="text-xs">8 POSTS</div>
            <div className="font-bold">8 Autumn Colour Palettes</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
