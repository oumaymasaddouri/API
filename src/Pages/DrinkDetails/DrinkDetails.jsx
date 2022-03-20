import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DrinkDetails.css";

const DrinkDetails = () => {
  const [loading, setloading] = useState(false);
  const [errors, seterrors] = useState(false);
  const [drink, setdrink] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  const getDrink = async () => {
    setloading(true);
    try {
      let response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id_drink}`
      );

      setloading(false);
      setdrink(response.data.drinks[0]);
    } catch (error) {
      setloading(false);
      seterrors(true);
    }
  };

  useEffect(() => {
    getDrink();
  }, []);

  return (
    <div className="det">
      <h1>{drink.strDrink}</h1>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <div>
        <h3>EN: {drink.strInstructions}</h3>
        <h3>DE: {drink.strInstructionsDE}</h3>
      </div>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
};

export default DrinkDetails;
