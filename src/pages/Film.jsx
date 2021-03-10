import api from "api";
import { Main } from "components";
import { Button } from "components/base";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Film = () => {
  const [movie, setMovie] = useState({});
  const { pathname: id } = useLocation();

  useEffect(() => {
    (async () => {
      const movieData = await api.show(id);
      const movieCredits = await api.show(id, "/credits");
      setMovie(() => ({ ...movieData, ...{ credits: movieCredits.cast } }));
    })();
  }, [id]);

  return (
    <>
      <Main>
        <div className="rounded overflow-hidden shadow-lg max-w-lg">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={`Movie poster for ${movie.title}`}
            className="rounded-md mx-auto"
          ></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{movie.title}</div>
            <div className="flex flex-row align-center">
              <div className="flex flex-col pr-4">
                <p>Rating</p>
                <p>{movie.vote_average}</p>
              </div>
              <div className="flex flex-col pr-4">
                <p>Release Date</p>
                <p>{movie.release_date}</p>
              </div>
            </div>
            <p className="font-bold text-xl mb-2">Summary</p>
            <p className="text-gray-700 text-base">{movie.overview}</p>
          </div>
          <Link to="/" className="p-7 pb-8">
            <Button txt="Return" />
          </Link>
          <p className="pb-4"> </p>
        </div>
      </Main>
    </>
  );
};

export default Film;
