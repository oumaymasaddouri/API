import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./DrinkCard.css";

const DrinkCard = ({ drink }) => {
  return (
    <div>
      <div className="card-container">
        <div className="card u-clearfix">
          <div className="card-body">
            <span className="card-number card-circle subtle">01</span>
            <span className="card-author subtle">{drink.strAlcoholic}</span>
            <h2 className="card-title">{drink.strDrink}</h2>
            <span className="card-description subtle">
              Category: {drink.strCategory} <br />
              Ingredients: {drink.strIngredient1}, {drink.strIngredient2},
              {drink.strIngredient3}
            </span>
            <Link
              to={`/drinks/${drink.idDrink}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card-read">More</div>
            </Link>
            <span className="card-tag card-circle subtle">C</span>
          </div>
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="card-media"
            width={300}
          />
        </div>
        <div className="card-shadow" />
      </div>
    </div>
  );
};

export default DrinkCard;
