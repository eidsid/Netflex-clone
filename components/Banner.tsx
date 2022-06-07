import Image from "next/image";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../constants/movies";
import { Movie } from "../typing";
import { FaPlay } from "react-icons/fa";
import { InforamtionCircleIcon } from "react-icons";
interface Props {
  netflixOriginals: Movie[];
}
function Banner({ netflixOriginals }: Props) {
  const [Movie, setMovie] = useState<Movie>();
  useEffect(() => {
    let randomNumb = Math.floor(Math.random() * 20);
    setMovie(netflixOriginals[randomNumb]);
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${Movie?.backdrop_path || Movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className=" text-2xl md:text-4xl  lg:text-7xl">
        {Movie?.title || Movie?.name || Movie?.original_name}
      </h1>
      <p className=" max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {" "}
        {Movie?.overview}
      </p>
      <div>
        <button className="bannerBtn bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> play
        </button>
        <button className="bannerBtn  bg-[gray]/70">
          More Info
          <InforamtionCircleIcon className="" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
