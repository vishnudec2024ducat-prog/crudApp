import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUserData = createAsyncThunk("getUserData", async () => {
  let data = await axios.get(
    "https://689828dcddf05523e55e3d33.mockapi.io/user/users"
  );
  //   console.log(data)
  return data.data;
});

// Post User Data
export const addUserData = createAsyncThunk("addUserData", async (user)=>{
    await axios.post(`https://689828dcddf05523e55e3d33.mockapi.io/user/users`,user);
    return user
})

// Delete User 
export const deleteUserData = createAsyncThunk("deleteUserData", async (id)=>{
   try {
     await axios.delete(
       `https://689828dcddf05523e55e3d33.mockapi.io/user/users/${id}`
     );
     return id;
   } catch (error) {
      console.log(error)
   }
})

// Get Single  User  data
export const getSingleUserData = createAsyncThunk("getSingleUserData", async (id)=>{
   try {
    let singleUserData =  await axios.get(
       `https://689828dcddf05523e55e3d33.mockapi.io/user/users/${id}`
     );
     return singleUserData.data;
   } catch (error) {
      console.log(error)
   }
})

// Edit  User  data
export const editUserData = createAsyncThunk("editUserData", async ({user})=>{
   try {
     await axios.put(
       `https://689828dcddf05523e55e3d33.mockapi.io/user/users/${user.id}`,user
     );

   return user
   } catch (error) {
      console.log(error)
   }
})
const crudSlice = createSlice({
  name: "crudSlice",
  initialState: {
    user: {
      name: "",
      email: "",
      age: "",
      image: "",
      address: "",
    },
    data: [],
    show: false,
    checkForm: "Add",
    isLoading: false,
  },
  reducers: {
    handleShow: (state, action) => {
      state.show = true;
    },
    handleClose: (state, action) => {
      state.show = false;
    },
    handleUser: (state, action) => {
      state.user = action.payload;
    },
    handleCheckForm:(state,action)=>{
      state.checkForm = action.payload
    },
    handleClearForm:(state,action)=>{
      state.user = {
        name: "",
        email: "",
        age: "",
        image: "",
        address: "",
      };
    }
  },
  extraReducers: (build) => {
    build
      .addCase(getAllUserData.pending, (state, action) => {
        state.isLoading = true;
        state.data = [];
      })
      .addCase(getAllUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }).addCase(addUserData.fulfilled,(state,action)=>{
        state.isLoading = false
        state.data = [...state.data,action.payload]
      }).addCase(deleteUserData.fulfilled,(state,action)=>{
       let afterDeleteList =  state.data.filter((elm)=>elm.id != action.payload)
       state.data = afterDeleteList
      }).addCase(getSingleUserData.fulfilled,(state,action)=>{
          state.user = action.payload
      }).addCase(editUserData.fulfilled,(state,action)=>{
        let index =   state.data.findIndex((elm)=>elm.id==action.payload.id)
        state.data[index] = action.payload
      })
  },
});

export const {
  handleClose,
  handleShow,
  handleUser,
  handleCheckForm,
  handleClearForm,
} = crudSlice.actions;
export default crudSlice.reducer;
