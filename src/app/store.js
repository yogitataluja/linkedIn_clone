import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';  // import reducer(rootreducer) from reducer folder 

export const store = configureStore({
  // rootreducer start
  reducer: {
    user: userReducer,
  }
  // rootreducer end
});
