import { EMPLOYEES_ACTION_TYPES } from "./emp-action-types";
const initialState = {
    employees: [],
}
export const employeeReducer = (state=initialState, {type, payload}) =>{
    // const {type,payload} = action;
    switch(type){
        case EMPLOYEES_ACTION_TYPES.SET_EMPLOYEES:
            return {
                ...state,
                employees: payload
            }
        case EMPLOYEES_ACTION_TYPES.ADD_EMPLOYEES:
            return {
                ...state, employees: payload
            }
        default:
            return state;
    }
}

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ACTION_TYPES.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case ACTION_TYPES.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };