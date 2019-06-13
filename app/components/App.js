import PropTypes from "prop-types";

const App = ({ children }) => (
  <main>
    {children}
    <style jsx global>
      {`
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        body {
          margin: 0;
          padding: 25px 50px;
        }
        p {
          font-size: 14px;
          line-height: 24px;
        }
        article {
          margin: 0 auto;
          max-width: 650px;
        }
      `}
    </style>
  </main>
);

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default App;
