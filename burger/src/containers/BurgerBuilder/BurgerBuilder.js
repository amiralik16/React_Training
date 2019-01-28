import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummery/OrderSummary';


const prices = {
    salad: 0.5,
    bacon: 0.6,
    cheese: 0.4,
    meat: 1
};

// eslint-disable-next-line
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

export class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        price: 4,
        isPurchasing: false,
    }

    purchaseForwardHandler = () =>{
        alert('You Shall Pass!!')
    }

    togglePurchasingModal = () => {
        this.setState({isPurchasing: !this.state.isPurchasing})
    }

    addIngredient = (type) => {
        const ingredientsCopy = { ...this.state.ingredients };
        ingredientsCopy[type]++;
        this.setState({ ingredients: ingredientsCopy, price: this.state.price + prices[type] })

    }

    removeIngredient = (type) => {
        const ingredientsCopy = { ...this.state.ingredients };
        let price = this.state.price;
        if (ingredientsCopy[type] > 0) {
            ingredientsCopy[type]--;
            price -= prices[type];
        } else {
            console.log('oops')
        }
        this.setState({ ingredients: ingredientsCopy, price: price })
    }


    render() {
        const checkIngredientCount = (label) => {
            const ingredients = { ...this.state.ingredients };
            for (let key in ingredients) {
                ingredients[key] = ingredients[key] <= 0;
            }
            return ingredients
        }
        return (
            <>
                <Modal show={this.state.isPurchasing} cancel={this.togglePurchasingModal}><OrderSummary price = {this.state.price} cancel = {this.togglePurchasingModal} continue = {this.purchaseForwardHandler} ingredients={this.state.ingredients}/></Modal>
                <Burger ingredients={this.state.ingredients} />
                <p className='text-center'>{this.state.price.toFixed(2)} CAD</p>
                <BuildControls add={this.addIngredient} remove={this.removeIngredient} disabler={checkIngredientCount} modalTrigger={this.togglePurchasingModal} />
            </>
        )
    }
}

export default BurgerBuilder
