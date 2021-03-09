import api from "api";
import { Card, Main, SearchBar } from "components";
import { useEffect, useState } from "react";

function renderCards(movies) {
  return movies.map(
    ({ title, poster_path, release_date, vote_average, id }) => (
      <Card
        title={title}
        path={poster_path}
        date={new Date(release_date).toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "2-digit",
        })}
        rating={vote_average}
        key={id}
      />
    )
  );
}

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await api.index();
      setMovies(() => results);
    })();
  }, []);

  async function handleSearch(event) {
    event.preventDefault();
    console.log(event.target.elements[0].value);
    const { results } = await api.index("/search/movie", {
      query: event.target.elements[0].value,
    });
    setMovies(() => results);
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
