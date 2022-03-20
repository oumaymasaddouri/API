import axios from "axios";
import React, { useEffect, useState } from "react";
import DrinkCard from "../../Components/DrinkCard/DrinkCard";

const Drinks = ({ text }) => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const getDrink = async () => {
    try {
      setLoading(true);
      let result = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
      );
      setLoading(false);
      setDrinks(result.data.drinks);
    } catch (error) {
      setLoading(false);
      setErrors(true);
    }
  };
  useEffect(() => {
    getDrink();
  }, [text]);

  return (
    <div>
      {loading ? (
        <h1>wait...</h1>
      ) : errors ? (
        <h1>404 ERROR</h1>
      ) : drinks == null ? (
        <h1>NOTHING TO SHOW</h1>
      ) : (
        drinks.map((drink) => <DrinkCard drink={drink} key={drink.idDrink} />)
      )}
    </div>
  );
};

export default Drinks;
