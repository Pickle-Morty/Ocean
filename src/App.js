import React from "react"
import './App.css'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ProductPage from "./components/ProductPage/ProductPage"
import HomePage from "./components/Home/Home"
import { BrowserRouter, Route } from "react-router-dom"
import SingInPage from "./components/SingInPage/SingInPage"
import AddProductPage from "./components/AddProductPage/AddProductPage"
import ProductPageContainer from "./components/ProductPage/ProductPageContainer"
import HomePageContainer from "./components/Home/HomePageContainer"
import {Provider} from "react-redux"









const App = ({store}) => {
  return (
    <BrowserRouter>
        <Provider store={store}>
          <Route exact path="/"> <HomePageContainer /> </Route> 
          <Route path="/product"><ProductPageContainer /></Route>
          <Route exact path="/singIn" render ={ ()=> <SingInPage />} />
          <Route exact path="/addProduct" render = { ()=> <AddProductPage />} />
        </Provider>
          
    </BrowserRouter>
  );
}




export default App;

