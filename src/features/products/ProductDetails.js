// src/features/products/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from './productsApi';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, error, isLoading } = useGetProductByIdQuery(id);
    const dispatch = useDispatch();

    if (isLoading) return <LoadingSkeleton count = { 1 }
    />;

    if (error) return <div > Error fetching product details. < /div>;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return ( <
        div className = "container my-4" >
        <
        div className = "row" >
        <
        div className = "col-md-6" >
        <
        img src = { product.image }
        alt = { product.title }
        className = "img-fluid"
        style = {
            { maxHeight: '400px', objectFit: 'contain' }
        }
        /> < /
        div > <
        div className = "col-md-6" >
        <
        h2 > { product.title } < /h2> <
        h4 className = "text-muted" > $ { product.price } < /h4> <
        p > { product.description } < /p> <
        button className = "btn btn-success"
        onClick = { handleAddToCart } >
        Add to Cart <
        /button> < /
        div > <
        /div> < /
        div >
    );
};

export default ProductDetails;