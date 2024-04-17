import React, { useState, useEffect } from 'react';
import ListCocktail from '../componentes/Cocktail-list';
import Loading from '../componentes/Loading';

function Home() {

  //Empleamos useState para mostrar todos los batidos en el componente Home
  const [cocktails, setCocktails] = useState([]);

  //Aquí usamos otro useState para controlar cuando se está cargando la Api
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //Mientras se buscan los datos, lo ponemos en true
    setIsLoading(true);

    // Función para obtener todos los cócteles disponibles
    const fetchAllCocktails = async () => {
      try {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
        const response = await fetch(url);
        const data = await response.json();
        if (data.drinks) {
          // Actualiza el estado con los cócteles obtenidos
          setCocktails(data.drinks);
        } else {
          // Maneja el caso en que no se encuentren cócteles
          setCocktails([]);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setCocktails([]);
      }
    
    //Cuando acaba de buscar los cócteles, seteamos el valor a false
    setIsLoading(false);
    };
    fetchAllCocktails();
  }, []);

    //Cuando sea true, renderizará el componente Loading
    if (isLoading) {
      return <Loading />; 
    }

  return (
    <main>
      <section className="section">
        <h2 className="section-title">cocktails</h2>
        <div className="cocktails-center">

        {cocktails.map(({ idDrink, strDrinkThumb, strDrink, strGlass, strAlcoholic}) => (
          <ListCocktail
            key={strDrink}
            idDrink={idDrink}
            strDrinkThumb={strDrinkThumb}
            strDrink={strDrink}
            strGlass={strGlass}
            strAlcoholic={strAlcoholic}
          />
         
        ))}
        </div>
      </section>
    </main>
  );
}

export default Home;