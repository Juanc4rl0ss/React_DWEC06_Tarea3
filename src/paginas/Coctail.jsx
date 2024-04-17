import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Cocktail from '../componentes/Cocktail';

function Coctail() {
  // Usar useParams para obtener el id del cóctel desde la URL
  const { id } = useParams();
  const [cocktailDetails, setCocktailDetails] = useState(null);

  useEffect(() => {
    const getCocktailDetails = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        if (data.drinks) {
          // Suponiendo que siempre habrá un solo resultado, toma el primero
          const cocktail = data.drinks[0];
          setCocktailDetails({
            name: cocktail.strDrink,
            image: cocktail.strDrinkThumb,
            category: cocktail.strCategory,
            info: cocktail.strAlcoholic,
            glass: cocktail.strGlass,
            instructions: cocktail.strInstructions,
            ingredients: Array.from({ length: 15 }, (_, i) => cocktail[`strIngredient${i + 1}`]).filter(Boolean)
          });
        } else {
          setCocktailDetails(null);
        }
      } catch (error) {
        console.error("Error fetching cocktail details:", error);
      }
    };
    getCocktailDetails();
  }, [id]); // Dependencia del efecto: id del cóctel

  if (!cocktailDetails) {
    return <p>Loading cocktail details...</p>;
  }

  const { name, image, category, info, glass, instructions, ingredients } = cocktailDetails;

  return (
    <Cocktail
    nombre={name}
    imagen={image}
    categoria={category}
    informacion={info}
    vaso={glass}
    instrucciones={instructions}
    ingredientes={ingredients}
    
    />
  );
}

export default Coctail;