import { combineReducers } from "redux";
import { employeeReducer } from "./employees/emp-reducer";
export const reducers = combineReducers({
    allEmployees: employeeReducer,
})