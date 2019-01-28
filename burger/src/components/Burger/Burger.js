import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgeIngredients/BurgeIngredients'

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) =>{
            return <BurgerIngredient key = {igKey+i} type={igKey}/>
        });
    }).flat();

if (ingredients.length===0) ingredients = <p>Please select ingredients</p>
  

    console.log(ingredients)
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {ingredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}

export default burger
