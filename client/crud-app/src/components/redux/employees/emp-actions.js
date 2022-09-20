import {EMPLOYEES_ACTION_TYPES} from './emp-action-types';
export const setEmployees = (employees) =>{
    return{
        type: EMPLOYEES_ACTION_TYPES.SET_EMPLOYEES,
        payload: employees
    }
}

export const addEmployee = (employee) =>{
    return{
        type: EMPLOYEES_ACTION_TYPES.ADD_EMPLOYEES,
        payload: employee
    }
}
export const removeSelectedProduct = () => {
    return {
      type: EMPLOYEES_ACTION_TYPES.REMOVE_SELECTED_PRODUCT,
    };
  };