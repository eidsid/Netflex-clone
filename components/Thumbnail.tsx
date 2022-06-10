import Image from "next/image";
import React from "react";
import { baseUrl } from "../constants/movies";
import { Movie } from "../typing";
interface Props {
  movie: Movie;
  // movie: Movie|DocumentData;
}
export const Thumbnail: React.FC<Props> = ({ movie }) => {
  return (
    <div className="relative h-24 min-w-[180px]  cursor-pointer transition duration-200 ease-out md:h-36 md min-w[260px] md:hover:scale-105">
      <p>{movie?.name}</p>
      <p>{movie?.title}</p>
      <Image
        src={baseUrl + movie?.poster_path || movie.backdrop_path}
        height={100}
        width={100}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
};
