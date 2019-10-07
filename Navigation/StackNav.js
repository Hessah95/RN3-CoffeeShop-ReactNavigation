//import createStackNavigator
import { createStackNavigator } from "react-navigation-stack";
// import your components here they should be full screens
import Home from "../Components/HomePage";
import List from "../Components/CoffeeList";
import Detail from "../Components/CoffeeDetail";
import Login from "../Components/Login";
import Cart from "../Components/CoffeeCart";
import { white, bold } from "ansi-colors";

const StackNav = createStackNavigator(
  {
    ListScreen: List,
    DetailScreen: Detail,
    LoginScreen: Login,
    CartScreen: Cart
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "red",
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
