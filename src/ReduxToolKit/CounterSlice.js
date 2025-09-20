import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "CounterApp",
  initialState: {
    name: "unKnown",
    method: "unKnown",
    count: 0,
  },
  reducers: {
    increement: (state, action) => {
      state.count = state.count + 1
      state.method = action.payload.method
      state.name = action.payload.name;
    
    },
    decreement:(state,action)=>{
         state.count = state.count - 1;
         state.method = action.payload.method;
         state.name = action.payload.name;
    },
    reset:(state,action)=>{
           state.count = 0;
           state.method = action.payload.method;
           state.name = action.payload.name; 
    }
  },
});

export const { increement, decreement,reset } = counterSlice.actions;
export default counterSlice.reducer;
