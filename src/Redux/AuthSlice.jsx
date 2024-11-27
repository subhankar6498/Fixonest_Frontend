import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const AuthSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    //for logout
    logout: (state, { payload }) => {
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },

    //for checking token
    check_token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.isLoggedIn = true;
      }
    },

    setLogin: (state, { payload }) => {
      state.isLoggedIn = true;
    },
  },
});

export const { logout, check_token, setLogin } = AuthSlice.actions;
