//import createStackNavigator
import { createStackNavigator } from "react-navigation-stack";
// import your components here they should be full screens
import Home from "../Components/HomePage";
import List from "../Components/CoffeeList";
import Detail from "../Components/CoffeeDetail";
import Login from "../Components/Login";

const StackNav = createStackNavigator(
  {
    HomeScreen: Home,
    ListScreen: List,
    DetailScreen: Detail,
    LoginScreen: Login
  },
  {
    initialRouteName: "LoginScreen"
  }
);

export default StackNav;
