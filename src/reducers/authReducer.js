// Reducer para manejar estado de la autenticación de usuarios

import { type } from "../types/types";


export const authReducer = (initialState, action) => {
    switch(action.types){
        case type.LOGIN:
            return {
                ...action.payload,
                logged: true
            }
        case type.LOGOUT:
            return {
                logged: false
            }
        default:
            return initialState
    }
};