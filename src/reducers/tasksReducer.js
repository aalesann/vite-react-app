import { type } from "../types/types";


export const tasksReducer = (initialState, action) => {
    switch (action.types) {
        case type.SET_ALL_TASKS:
            return action.payload;
        case type.CREATE_TASK:
            return {
                ...initialState,
                ...action.payload
            }
        case type.GET_ALL_TASKS:
            return initialState;
        case type.DELETE_TASK:
            return initialState.map(task => {
                if (task._id === action.payload) {
                    return task;
                }
            });
        case type.EDIT_TASK:
            return initialState.map(task => {
                if (task._id === action.payload._id) {
                    task = action.payload
                };
                return task;
            })

        default:
            return initialState
    }
};