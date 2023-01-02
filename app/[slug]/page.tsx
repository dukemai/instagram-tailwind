import { FunctionComponent } from "react";

interface DetailPageProps {}
const tiles = [...new Array(12).keys()];
const DetailPage: FunctionComponent<DetailPageProps> = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tiles.map((t, index) => (
        <div className="w-full h-40 bg-white text-black p-4" key={index}>
          <div className="text-teal-600 text-lg">{index}</div>
          <div className="text-2xl font-semibold">
            The
            <br />
            Best
            <br />
            Works
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
