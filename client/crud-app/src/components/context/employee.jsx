import {createContext, useState} from 'react';

export const EmployeesContext = createContext({
    allEmployees: [],
    setAllEmployees: ()=> null
})
export const EmployeesProvider = ({children}) =>{
    const [allEmployees, setAllEmployees] = useState('');
    const value = {allEmployees, setAllEmployees};

    return(
        <EmployeesContext.Provider value={value}>
            {children}
        </EmployeesContext.Provider>
    )
}