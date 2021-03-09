import PropTypes from "prop-types";

function Main({ children }) {
  return (
    <main className="container mx-auto flex flex-col items-center gap-4">
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
