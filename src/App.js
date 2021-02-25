import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';


function App() {

  const APP_ID = '00efd74a';
  const APP_KEY = 'de8e53569304d02b5fa629f9bebb7e5a';


  const [recipes, setRecipes] = useState([]);

  //state for the search
  const [search, setSearch] = useState('');

  //state that only submits after we click submit
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query])

  //make async call for recipes 
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data)
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    //can access the target from this event 
    setSearch(e.target.value)
  }

  const getSearch = e => {
      e.preventDefault();
      setQuery(search)
      setSearch('')
  }

  return (
    
    <div className="App">
      <h1>Recipe Finder</h1>

      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-btn">Search</button>
      </form>

      <h2>{query.charAt(0).toUpperCase() + query.slice(1)} Dishes</h2>

      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        image={recipe.recipe.image}
        calories={Math.floor(recipe.recipe.calories/ recipe.recipe.yield)} 
        yields={recipe.recipe.yield}
        ingredients={recipe.recipe.ingredients} />
      ))}
      </div>
    </div>
  );
}

export default App;
