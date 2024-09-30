// // src/features/products/ProductsList.js
// import React from 'react';
// import { useGetProductsQuery } from './productsApi';
// import LoadingSkeleton from '../../components/LoadingSkeleton';
// import { Link } from 'react-router-dom';

// const ProductsList = () => {
//     const { data: products, error, isLoading } = useGetProductsQuery();

//     if (isLoading) return <LoadingSkeleton count = { 10 }
//     />;

//     if (error) return <div > Error fetching products. < /div>;

//     return ( <
//         div className = "container my-4" >
//         <
//         div className = "row" > {
//             products.map((product) => ( <
//                 div className = "col-md-3 mb-4"
//                 key = { product.id } >
//                 <
//                 div className = "card h-100" >
//                 <
//                 img src = { product.image }
//                 className = "card-img-top p-3"
//                 alt = { product.title }
//                 style = {
//                     { height: '200px', objectFit: 'contain' }
//                 }
//                 /> <
//                 div className = "card-body d-flex flex-column" >
//                 <
//                 h5 className = "card-title" > { product.title } < /h5> <
//                 p className = "card-text" > $ { product.price } < /p> <
//                 Link to = { `/products/${product.id}` }
//                 className = "mt-auto btn btn-primary" >
//                 View Details <
//                 /Link> < /
//                 div > <
//                 /div> < /
//                 div >
//             ))
//         } <
//         /div> < /
//         div >
//     );
// };

// export default ProductsList;

















// src/features/products/ProductsList.js
import React, { useState } from 'react';
import { useGetProductsQuery } from './productsApi';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';

const ProductsList = () => {
    const { data: products, error, isLoading } = useGetProductsQuery();

    // Pagination state
    const [currentPage, setCurrentPage] = useState(2); // Example: Set current page to 2 for demo purposes
    const itemsPerPage = 10;

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (isLoading) return <LoadingSkeleton count = { 10 }
    />;

    if (error) return <div > Error fetching products. < /div>;

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    return ( <
        div className = "container my-4" >
        <
        div className = "row" > {
            currentProducts.map((product) => ( <
                div className = "col-md-3 mb-4"
                key = { product.id } >
                <
                div className = "card h-100" >
                <
                img src = { product.image }
                className = "card-img-top p-3"
                alt = { product.title }
                style = {
                    { height: '200px', objectFit: 'contain' }
                }
                /> <
                div className = "card-body d-flex flex-column" >
                <
                h5 className = "card-title" > { product.title } < /h5> <
                p className = "card-text" > $ { product.price } < /p> <
                Link to = { `/products/${product.id}` }
                className = "mt-auto btn btn-primary" >
                View Details <
                /Link> < /
                div > <
                /div> < /
                div >
            ))
        } <
        /div>

        { /* Centered Pagination */ } <
        div className = "d-flex justify-content-center mt-4" >
        <
        Pagination >
        <
        Pagination.First onClick = {
            () => handlePageChange(1)
        }
        disabled = { currentPage === 1 }
        /> <
        Pagination.Prev onClick = {
            () => handlePageChange(currentPage - 1)
        }
        disabled = { currentPage === 1 }
        /> { [...Array(totalPages).keys()].map((page) => ( <
        Pagination.Item key = { page + 1 }
        active = { page + 1 === currentPage }
        onClick = {
            () => handlePageChange(page + 1)
        } > { page + 1 } <
        /Pagination.Item>
    ))
} <
Pagination.Next onClick = {
    () => handlePageChange(currentPage + 1)
}
disabled = { currentPage === totalPages }
/> <
Pagination.Last onClick = {
    () => handlePageChange(totalPages)
}
disabled = { currentPage === totalPages }
/> < /
Pagination > <
    /div> < /
div >
);
};

export default ProductsList;