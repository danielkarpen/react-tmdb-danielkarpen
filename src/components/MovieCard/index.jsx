import { Button } from "components/base";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ title, path, date, rating, id }) => {
  return (
    <section className="flex flex-col gap-2 center">
      <h2 className="text-center padding-bottom-8 line-clamp-1">{title}</h2>
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${path}`}
          alt={`Movie poster for ${title}`}
          className="cursor-pointer  transform hover:scale-105 duration-75 ease-in-out border-4 border-transparent rounded-xl"
        />
        <figcaption>
          <p>Release Date: {date}</p>
          <p>Rating: {rating}</p>
        </figcaption>
      </figure>
      <Link to={`/${id}`}>
        <Button txt="More Info" />
      </Link>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  date: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
