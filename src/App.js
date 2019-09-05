import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';
require('dotenv').config();

const App = () => {

  const APP_ID =`${process.env.REACT_APP_API_ID}`;
  const API_KEY =`${process.env.REACT_APP_API_KEY}`;
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [getQuery, setQuery] = useState("cherry");

  useEffect(() => {
    const getRecip = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${getQuery}&app_id=${APP_ID}&app_key=${API_KEY}`);
      const data = await response.json(); //formats the data into json file
      setRecipes(data.hits);
      
    };
    getRecip();
  }, [getQuery]);


  const letSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={letSearch}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes" key={recipes.id}>
      {recipes.map(recipe => (
        <React.Fragment>
          <Recipe 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            original={recipe.recipe.url}
          />
         

        </React.Fragment>
        
      ))}
    </div>
    </div>
  );
}
  

export default App;
