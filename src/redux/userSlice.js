import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userSilce",
    initialState:{
        users:JSON.parse(localStorage.getItem("users"))||[],
        user:JSON.parse(localStorage.getItem("user"))||null,
        userAuthenticated:JSON.parse(localStorage.getItem("userAuthenticated"))||false,
    },
    reducers:{
        userRegister:(state,action)=>{
            state.users.push(action.payload)
            localStorage.setItem("users",JSON.stringify(state.users))
        },
        userLogin:(state,action)=>{
          state.user = action.payload
          state.userAuthenticated = true

          localStorage.setItem("user",JSON.stringify(state.user))
          localStorage.setItem("userAuthenticated",JSON.stringify(state.userAuthenticated))
        },
        logOut:(state)=>{
          
            state.user = null,
            state.userAuthenticated =false

            localStorage.removeItem("user")
            localStorage.removeItem("userAuthenticated")
        },
        upadateUserRole:(state,action)=>{
          const findUser = state.users.findIndex((item)=>item.id === action.payload.id)
                
                 
          if (findUser !==-1) {
            state.users[findUser].role = action.payload.role;
            localStorage.setItem("users",JSON.stringify(state.users))
          }
          if (state.user.id === action.payload.id) {
            state.user.role = action.payload.role
            localStorage.setItem("user",JSON.stringify(state.user))
          }
           
       
        }
    }
})

export default userSlice.reducer;
export const {userRegister,userLogin,logOut,upadateUserRole} = userSlice.actions;