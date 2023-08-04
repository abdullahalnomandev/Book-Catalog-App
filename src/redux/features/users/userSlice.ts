import { createSlice } from "@reduxjs/toolkit";

interface IUsers {
  user:{
    name: string;
    email: string;
    username: string;
  },
  isLogin:boolean;
}

const initialState:IUsers = {
 user:{
    name: '',
    email: '',
    username: ''
  },
  isLogin:false

}

const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    signIn: (state, { payload }) => {
      state.user = payload;
      state.isLogin = true;
    },

    signUp: (state, { payload }) => {
      state.user = payload;
      state.isLogin = true
    },

    signOut: (state) => {
      state.user.email = '' ;
      state.isLogin = true
    }
  }
});

export const { signIn, signUp ,  signOut} = userSlice.actions;
export default userSlice.reducer;
