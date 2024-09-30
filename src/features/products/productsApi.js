// src/features/products/productsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products',
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`,
        }),
        getCart: builder.query({
            query: () => 'carts',
        }),
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetCartQuery } = productsApi;