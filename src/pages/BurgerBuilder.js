import React, { Component } from "react";
import { View } from "react-native";
import Burger from "../components/Burger";
// import BuildControls from "../../components/Burger/BuildControls";
// import OrderSummary from "../../components/Burger/OrderSummary";
// import { IngredientModel } from "../../types/models/ingredient.model";
// import Modal from "../../UI/Modal";


//Ver isso em typescript
const PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}


class BurgerBuilder extends Component {

    state =
        {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 2,
                meat: 2,
            },
            totalPrice: 4,
            purchasable: false
        }

    updatePurchaseState = (ingredientsModel) => {
        const sum = Object.keys(ingredientsModel)
            .map(igKey => {
                return ingredientsModel[igKey];
            }).reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const updateIngredients = { ...this.state };
        updateIngredients.ingredients[type] += 1;
        const newPrice = updateIngredients.totalPrice + PRICES[type];
        this.setState({ ingredients: updateIngredients.ingredients, totalPrice: newPrice });
        this.updatePurchaseState(updateIngredients.ingredients);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0)
            return;
        const updateIngredients = { ...this.state };
        updateIngredients.ingredients[type] -= 1;
        const newPrice = updateIngredients.totalPrice - PRICES[type];
        this.setState({ ingredients: updateIngredients.ingredients, totalPrice: newPrice });
        this.updatePurchaseState(updateIngredients.ingredients);
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <View>
                {/* <Modal>
                    <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
                </Modal> */}
                <Burger ingredients={this.state.ingredients} />
                {/* <BuildControls price={this.state.totalPrice} purchaseble={this.state.purchasable} add={this.addIngredientHandler} remove={this.removeIngredientHandler} disabled={disabledInfo} /> */}
            </View>
        );
    }
}

export default BurgerBuilder;