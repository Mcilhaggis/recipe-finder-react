import React from 'react';
import style from './recipe.module.css'
//the curly braces takes things from the state and passes them into the props/ into the components
const Recipe = ({title, calories, image, ingredients, yields}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src ={image} alt="" />	
            <p className={style.details}>Calories per portion: {calories}</p>             
            <p>Recipe yields: {yields}</p>
            <ol>{ingredients.map(ingredients => (
                <li>{ingredients.text}</li>
            ))}</ol>

        </div>
    )
}

export default Recipe;