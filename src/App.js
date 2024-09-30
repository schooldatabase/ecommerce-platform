// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './features/products/ProductsList';
import ProductDetails from './features/products/ProductDetails';
import Cart from './features/cart/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About'; // Import About page
import Contact from './pages/Contact'; // Import Contact page

const App = () => {
    return ( <
        Router >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < ProductsList / > }
        /> <
        Route path = "/products/:id"
        element = { < ProductDetails / > }
        /> <
        Route path = "/cart"
        element = { < Cart / > }
        />  <
        Route path = "/about"
        element = { < About / > }
        />  <
        Route path = "/contact"
        element = { < Contact / > }
        />  < /
        Routes > <
        Footer / >
        <
        /Router>
    );
};

export default App;