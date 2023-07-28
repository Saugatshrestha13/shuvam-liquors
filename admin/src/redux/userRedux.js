import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    allUsers: null,
    isAllUsersFetching: false,
    allUsersError: false,
    userById: null,
    isUserByIdFetching: false,
    userByIdError: false,
    userUpdate: null,
    isUserUpdateFetching: false,
    userUpdateError: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getUsersStart: (state) => {
      state.isAllUsersFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.isAllUsersFetching = false;
      state.allUsers = action.payload;
    },
    getUsersFailure: (state) => {
      state.isAllUsersFetching = false;
      state.allUsersError = true;
    },
    getUsersByIdStart: (state) => {
      state.isUserByIdFetching = true;
    },
    getUsersByIdSuccess: (state, action) => {
      state.isUserByIdFetching = false;
      state.userById = action.payload;
    },
    getUsersByIdFailure: (state) => {
      state.isUserByIdFetching = false;
      state.userByIdError = true;
    },
    //UPDATE
    updateUserStart: (state) => {
      state.isUserUpdateFetching = true;
      state.userUpdateError = false;
    },
    updateUserSuccess: (state, action) => {
      console.log(state.user.userUpdate);
      state.isUserUpdateFetching = false;
      state.userUpdate = action.payload;
    },
    updateUserFailure: (state) => {
      state.isUserUpdateFetching = false;
      state.userUpdateError = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  getUsersByIdStart,
  getUsersByIdSuccess,
  getUsersByIdFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} = userSlice.actions;
export default userSlice.reducer;
