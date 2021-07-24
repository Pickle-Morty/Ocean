import React from "react"
import './App.css'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ProductPage from "./components/ProductPage"
import HomePage from "./components/Home/Home"
import { BrowserRouter, Route } from "react-router-dom"
import SingInPage from "./components/SingInPage/SingInPage"
import AddProductPage from "./components/AddProductPage/AddProductPage"








const App = (props) => {
  return (
    <BrowserRouter>
        <Route path="/product" render ={ () => <ProductPage productData = {props.state.productPage.productData} catalogData = {props.state.productPage.catalogData} />}/>
        <Route exact path="/" render={ () => <HomePage catalogData = {props.state.homePage.catalogData} productData = {props.state.homePage.productData}/>}  /> 
        <Route exact path="/singIn" render ={ ()=> <SingInPage />} />
        <Route exact path="/addProduct" render = { ()=> <AddProductPage addProduct ={props.addProduct} addProductData={props.state.addProductPage} updateTitleText ={props.updateTitleText} />} />
    </BrowserRouter>
  );
}




export default App;

