import api from "api";
import { Card, Main, SearchBar } from "components";
import { useEffect, useState } from "react";

function renderCards(movies) {
  return movies.map(({ title, poster_path, release_date, rating, id }) => (
    <Card
      title={title}
      path={poster_path}
      date={release_date}
      rating={rating}
      key={id}
    />
  ));
}

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await api.index();
      setMovies(() => results);
    })();
  }, []);

  function handleSearch(event) {
    event.preventDefault();
  }

  return (
    <Main>
      <SearchBar handler={handleSearch} label="Search Movie Titles" />
      <div className="bg-gray-50 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 border-8 border-transparent">
        {renderCards(movies)}
      </div>
    </Main>
  );
};

export default Home;
