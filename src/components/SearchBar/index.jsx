import { Button } from "components/base";
import PropTypes from "prop-types";

const SearchBar = ({ handler, label }) => {
  return (
    <form className="flex items-center justify-items-center">
      <div className="mr-3">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="search"
          placeholder="🔍"
          id="search"
          name="searchTerm"
          className="focus:ring-transparent rounded-md focus:shadow-lg transition duration-300 ease-in-out"
        />
      </div>
      <Button txt="Search!" />
    </form>
  );
};

SearchBar.propTypes = {
  handler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default SearchBar;
