import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React, { useRef, useState } from "react";
import { Movie } from "../typing";

import { Thumbnail } from "./Thumbnail";

interface Props {
  title: string;
  movies: Movie[];
  // movie: Movie|DocumentData;
}
const Row: React.FC<Props> = ({ title, movies }) => {
  const RowRef = useRef<HTMLDivElement>(null);

  const [IsMove, setIsMove] = useState<boolean>(false);

  const handelClick = (direction: "left" | "right"): void => {
    setIsMove(true);
    if (RowRef.current) {
      const { scrollLeft, clientWidth } = RowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      RowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const moviesDom = movies.map((movie) => {
    return <Thumbnail movie={movie} key={movie.id} />;
  });

  return (
    <div className=" h-40 space-y-0.5 md:space-y-2 ">
      <p
        className={`w-40 md:text-2xl cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white `}
      >
        {title}
      </p>
      <div className="group relative  ">
        <ChevronLeftIcon
          className={`h-9 w-9 absolute cursor-pointer top-[50%] translate-y-[-50%]   left-0  z-10 transition  hover:opacity-100 hover:scale-125 ${
            !IsMove && "hidden"
          }`}
          onClick={() => handelClick("left")}
        />

        <div
          ref={RowRef}
          className="flex items-center space-x-0.5 bg-red-100 overflow-x-scroll md:space-x-2.5  scrollbar-hide"
        >
          {moviesDom}
        </div>

        <ChevronRightIcon
          className="h-9 w-9 absolute cursor-pointer top-[50%] translate-y-[-50%] right-2 transition  hover:opacity-100 hover:scale-125  "
          onClick={() => handelClick("right")}
        />
      </div>
      <div className="container flex justify-center items-center"></div>
    </div>
  );
};

export default Row;
