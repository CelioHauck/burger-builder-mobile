import React, { Component } from "react";
import { View } from "react-native";
import axios from "../infra/axios/order";
import Burger from "../components/Burger";
import BuildControls from "../components/Burger/BuildControls";
import OrderSummary from "../components/Burger/OrderSummary";
import Modal from "../ui/Modal";

const PRICES = {
  salad: 1.5,
  cheese: 2,
  meat: 3,
  bacon: 1.8,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasable: false,
  };

  updatePurchaseState = (ingredientsModel) => {
    const sum = Object.keys(ingredientsModel)
      .map((igKey) => {
        return ingredientsModel[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const updateIngredients = { ...this.state };
    updateIngredients.ingredients[type] += 1;
    const newPrice = updateIngredients.totalPrice + PRICES[type];
    this.setState({
      ingredients: updateIngredients.ingredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updateIngredients.ingredients);
  };

  closeHandler = () => {
    this.setState({ purchasing: false });
  };

  continueHandler = () => {
    this.setState({ loading: true });
    if (this.state.ingredients) {
      const order = {
        ingredients: this.state.ingredients,
        dateOrder: new Date(),
        price: this.state.totalPrice,
        custormer: {
          name: "Célio",
          address: {
            street: "Rua testinho de noronha",
            zipCode: "33335554",
            country: "Brasil",
          },
          email: "email@email.com",
        },
        deliveryMethod: "IFood",
      };

      axios
        .post("/orders.json", order)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
        .finally(() => {
          this.setState({ loading: false, purchasing: false });
        });
    }
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] <= 0) return;
    const updateIngredients = { ...this.state };
    updateIngredients.ingredients[type] -= 1;
    const newPrice = updateIngredients.totalPrice - PRICES[type];
    this.setState({
      ingredients: updateIngredients.ingredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updateIngredients.ingredients);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = null;

    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            price={this.state.totalPrice}
            purchaseble={this.state.purchasable}
            add={this.addIngredientHandler}
            remove={this.removeIngredientHandler}
            ordered={this.purchasingHandler}
            disabled={disabledInfo}
          />
        </>
      );

      orderSummary = (
        <OrderSummary
          totalPrice={this.state.totalPrice}
          cancel={this.closeHandler}
          continue={this.continueHandler}
          ingredients={this.state.ingredients}
          isAction
        />
      );
    }

    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} close={this.closeHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
