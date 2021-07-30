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









const App = ({store}) => {
  return (
    <BrowserRouter>
        <Route exact path="/"> <HomePageContainer store ={store}/> </Route> 
        <Route path="/product"><ProductPageContainer store = {store}/></Route>
        <Route exact path="/singIn" render ={ ()=> <SingInPage />} />
        <Route exact path="/addProduct" render = { ()=> <AddProductPage store = {store}/>} />
    </BrowserRouter>
  );
}




export default App;

