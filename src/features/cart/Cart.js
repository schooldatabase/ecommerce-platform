// src/features/cart/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} from './cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    if (cartItems.length === 0)
        return ( <
            div className = "container my-4" >
            <
            h2 > Your Cart is Empty < /h2> <
            Link to = "/"
            className = "btn btn-primary mt-3" >
            Go Shopping <
            /Link> <
            /div>
        );

    return ( <
        div className = "container my-4" >
        <
        h2 > Your Cart < /h2> <
        table className = "table" >
        <
        thead >
        <
        tr >
        <
        th > Product < /th> <
        th > Price < /th> <
        th style = {
            { width: '150px' } } > Quantity < /th> <
        th > Total < /th> <
        th > < /th> <
        /tr> <
        /thead> <
        tbody > {
            cartItems.map((item) => ( <
                tr key = { item.id } >
                <
                td >
                <
                img src = { item.image }
                alt = { item.title }
                style = {
                    { width: '50px', height: '50px', objectFit: 'contain' } }
                />{' '} { item.title } <
                /td> <
                td > $ { item.price } < /td> <
                td >
                <
                div className = "d-flex" >
                <
                button className = "btn btn-secondary btn-sm"
                onClick = {
                    () => dispatch(decreaseQuantity(item.id)) } >
                -
                <
                /button> <
                span className = "mx-2" > { item.quantity } < /span> <
                button className = "btn btn-secondary btn-sm"
                onClick = {
                    () => dispatch(increaseQuantity(item.id)) } >
                +
                <
                /button> <
                /div> <
                /td> <
                td > $ {
                    (item.price * item.quantity).toFixed(2) } < /td> <
                td >
                <
                button className = "btn btn-danger btn-sm"
                onClick = {
                    () => dispatch(removeFromCart(item.id)) } >
                Remove <
                /button> <
                /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table> <
        h4 > Total: $ { total } < /h4> <
        button className = "btn btn-warning me-2"
        onClick = {
            () => dispatch(clearCart()) } >
        Clear Cart <
        /button> <
        button className = "btn btn-success" > Proceed to Checkout < /button> <
        /div>
    );
};

export default Cart;