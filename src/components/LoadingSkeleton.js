// src/components/LoadingSkeleton.js
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingSkeleton = ({ count }) => {
    return ( <
        div className = "container my-4" >
        <
        div className = "row" > {
            Array(count)
            .fill()
            .map((_, index) => ( <
                div className = "col-md-3 mb-4"
                key = { index } >
                <
                div className = "card h-100" >
                <
                Skeleton height = { 200 }
                /> <
                div className = "card-body" >
                <
                Skeleton height = { 20 }
                width = { `80%` }
                /> <
                Skeleton height = { 20 }
                width = { `40%` }
                className = "my-2" / >
                <
                Skeleton height = { 36 }
                width = { `60%` }
                /> <
                /div> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
};

export default LoadingSkeleton;