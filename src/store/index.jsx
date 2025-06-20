//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';    

  const initialCounterState={ counter: 0, showCounter: true };
const counterSlice = createSlice({  // redux toolkit
name: 'counter',
initialState: initialCounterState,
reducers: {
    increment: (state) => {
        state.counter++;
    },
    decrement: (state) => {
        state.counter--;
    },
    increase: (state, action) => {
        state.counter += action.payload;
    },
    toggle: (state) => {
        state.showCounter = !state.showCounter;
    }
}
});
const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name:'authentication',
    initialState: initialAuthState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }
    }
});

//redux  reducer function 
// const counterReducer = (state= {initialState}, action) => {
// if(action.type==='increment'){
//     return{
//         counter:state.counter+1,
//         showCounter: state.showCounter
//     };
// }
// if(action.type==='decrement'){
//     return{
//         counter:state.counter-1,
//         showCounter: state.showCounter
//     };
// }
// if(action.type==='increase'){
//     return{
//         counter:state.counter+action.amount,
//         showCounter: state.showCounter
//     };
// }
// if(action.type==='toggle'){
//     return{
//         counter: state.counter,
//         showCounter: !state.showCounter  
//     };
// }
// return state;
// }   


//const store= createStore(counterSlice.reducer);



const store= configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;