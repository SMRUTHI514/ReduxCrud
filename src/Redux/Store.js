import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from './Slices/EmployeeSlice'

const store = configureStore({
    reducer:{
        employeeReducer
    }

})

export default store