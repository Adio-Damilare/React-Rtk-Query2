import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../Feature/counter/counterSlice";
import { apiSlice } from "../Feature/api/apiSlice";

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware)
})