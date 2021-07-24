import store from "./Redux/state"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



export let reRenderEntireThree = (store) => { 
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} addProduct ={store.addProduct} updateTitleText ={store.updateTitleText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


reRenderEntireThree(store)

store.subscibe(reRenderEntireThree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


