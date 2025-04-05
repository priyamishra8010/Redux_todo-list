import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../Slice/Slice.jsx";

export const store = configureStore({
    reducer:{
        todo : TodoSlice,
    }
}) 