import { createSlice } from '@reduxjs/toolkit';
//const [user, setuser]= useState(initialstate)

const initialState = {  
  user: null             //it is equal to user
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  // In reducer we create two function 1 login and 2nd logout
  // reducer is always a function
  reducers: {
    login: (state, action) => {
      state.user = action.payload;  //setuser(action.payload)// it is equal to setuser only difference is its global
    },  //Payload is object that we pass along
    logout: (state) => {
      state.user = null;
    },
  }
});


export const { login, logout } = userSlice.actions;  //action we are performing is define here // export both function

export const selectUser = (state) => state.user.user;  //this help to return user(or actual value of state) //pull user(line 6) from userslice to any component and level
//first user is name and second user is the user(which we initialise) of usestate 

export default userSlice.reducer;
