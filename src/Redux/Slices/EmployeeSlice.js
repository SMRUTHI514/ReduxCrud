import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    updateEmployee: (state, action) => {
      const { id, name,email } = action.payload;
      const employee = state.employees.find((emp) => emp.id === id);

      if (employee) {
        employee.id=id;
        employee.name = name;
        employee.email= email;
       
      }
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter((emp) => emp.id !== action.payload);
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;