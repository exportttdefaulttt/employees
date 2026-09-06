import { createSlice, createEntityAdapter, type PayloadAction } from '@reduxjs/toolkit';
import { prepareEmployee } from '@/utils/prepareEmployee';
import { EMPLOYEES, type Employee, type EmployeeBooleanKeys } from '@/types/employee';

const employeesAdapter = createEntityAdapter<Employee>();

const initialState = employeesAdapter.addMany(employeesAdapter.getInitialState(), EMPLOYEES);

const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		addEmployee: {
			reducer: employeesAdapter.addOne,
			prepare: prepareEmployee,
		},
		removeEmployee: employeesAdapter.removeOne,
		toggleEmployee: (state, action: PayloadAction<{ id: Employee['id'], prop: EmployeeBooleanKeys}>) => {
			const { id, prop } = action.payload;
			employeesAdapter.updateOne(state, {
				id,
				changes: {
					[prop]: !state.entities[id][prop]
				},
			});
		},
		updateEmployee: employeesAdapter.updateOne,
	},
});

export const { getSelectors } = employeesAdapter;
export const { addEmployee, removeEmployee, toggleEmployee, updateEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;