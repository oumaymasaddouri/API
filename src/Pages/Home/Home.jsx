import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeP">
      <h1>Welcome to TheCocktailDB</h1>
      <div>
        <img
          src="https://www.thecocktaildb.com/images/cocktail_left.png"
          alt="img"
        />
        <h3>
          An open, crowd-sourced database of drinks and cocktails from around
          the world. We also offer a free JSON API for anyone wanting to use it.
          If you like the site, please consider supporting us on Patreon by
          clicking the link below...
        </h3>
        <img
          src="https://www.thecocktaildb.com/images/cocktail_left.png"
          alt="img"
        />
      </div>
      <hr />
    </div>
  );
};

export default Home;
