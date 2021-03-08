import api from "api";
import { Main } from "components";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await api.index();
      setMovies(() => results);
    })();
  }, []);

  console.log(movies);

  return <Main></Main>;
};

export default Home;
