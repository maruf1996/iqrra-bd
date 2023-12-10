import { auth } from "@/Firebase/firebase.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const initialState = {
  user: {
    email: null,
  },
  isLoading: true,
  isError: false,
  error: null,
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password }) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      return data.user.email;
    } catch (error) {
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      return data.user.email;
    } catch (error) {
      throw error;
    }
  }
);

export const listenToAuthState = createAsyncThunk(
  "user/listenToAuthState",
  async (_, { dispatch }) => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser(user.email));
        } else {
          dispatch(setUser(null));
        }
        dispatch(setLoading(false));
      });
    } catch (error) {
      // Handle any errors here, if needed
      console.error("Error in listenToAuthState:", error);
      dispatch(setUser(null));
      dispatch(setLoading(false));
    }
  }
);

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  await signOut(auth);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user.email = null;
        state.isLoading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(listenToAuthState.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(listenToAuthState.fulfilled, (state) => {
        // No need to modify state.user.email here, as it's handled in the listenToAuthState thunk
        state.isLoading = false;
      })
      .addCase(listenToAuthState.rejected, (state) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        // You might want to handle the error here if necessary
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
