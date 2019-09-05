import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom';
import style from './recipe.module.css';

const Recipe = ({title, calories, img, ingredients, original}) => {

    return (
        <div className={style.recipe} >
            <h1>{title}</h1>
            <p>Calories: {calories.toFixed(2)}</p>
            <div className={style.para}>{ingredients.map(ingredient => (
                    <p>{ingredient.text}</p>
                ))}</div>
            <BrowserRouter>
            <Link to={original}>    
            <button>Show Recipe</button><br></br>
            </Link>
            </BrowserRouter>
            <img className={style.image} src={img} alt=""/>
            
        </div>
    );
};

export default Recipe;
