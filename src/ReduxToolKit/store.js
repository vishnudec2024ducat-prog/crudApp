import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./CounterSlice.js";
import crudSlice from "./CrudSlice.js";
const store = configureStore({   
    reducer:{
        counterApp:counterSlice,
        crudApp:crudSlice
       
    }
})

export default store