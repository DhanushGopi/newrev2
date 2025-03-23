import { configureStore } from "@reduxjs/toolkit";

const getNewreUserData = (state = {}, action) =>{
    switch (action.type){
        case 'newreUser':
            return action.data;
        default:
            return false;
    }
}

export const newreUserDataStore = configureStore(
   {
    reducer:{
        "newreUserData" : getNewreUserData
    }
   } 
)