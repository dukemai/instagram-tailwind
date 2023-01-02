import { FunctionComponent } from "react";

interface PageProps {}

const tiles = [...new Array(12).keys()];

const Page: FunctionComponent<PageProps> = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tiles.map((t, index) => (
        <div
          className="w-full h-56 bg-white text-black p-4 flex items-center justify-center relative tile"
          key={index}
        >
          <div className="text-2xl font-semibold text-center">tagged post</div>
          <div className="tile-overlay hidden absolute top-0 left-0 w-full h-full bg-black/[0.5] flex items-center justify-center">
            <div className="text-white flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>

              <span className="">998</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>

              <span>7</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
