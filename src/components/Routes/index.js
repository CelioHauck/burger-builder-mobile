import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import BurgerScreen from "../../pages/BurgerBuilder";
import LoginScreen from "../../pages/LoginScreen";

const Principal = createStackNavigator(
  {
    BurgerScreen: {
      screen: BurgerScreen,
      navigationOptions: () => ({
        headerTitle: "Montagem do Hamburger",
        headerStyle: {
          backgroundColor: "#cf8f2f",
          borderBottomColor: "#fff",
          borderBottomWidth: 1,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }),
    },
  },
  {
    headerLayoutPreset: "center",
  }
);

const NewRequest = createStackNavigator(
  {
    NewRequest: {
      screen: BurgerScreen,
      navigationOptions: () => ({
        headerTitle: "Novo Pedido",
        headerStyle: {
          backgroundColor: "#cf8f2f",
          borderBottomColor: "#fff",
          borderBottomWidth: 1,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }),
    },
  },
  {
    headerLayoutPreset: "center",
  }
);

const Login = createStackNavigator(
  {
    NewRequest: {
      screen: LoginScreen,
      navigationOptions: () => ({
        headerTitle: "Novo Pedido",
        headerStyle: {
          backgroundColor: "#cf8f2f",
          borderBottomColor: "#fff",
          borderBottomWidth: 1,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }),
    },
  },
  {
    headerLayoutPreset: "center",
  }
);

const BottomTab = createBottomTabNavigator({
  ["Meus Pedidos"]: {
    screen: Principal,
  },
  ["Novo Pedido"]: {
    screen: NewRequest,
  },
  ["Sair"]: {
    screen: Login,
  },
});

const Routes = createAppContainer(BottomTab);

export default Routes;
