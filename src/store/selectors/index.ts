import { createAppSelector } from '@/store/helpers';
import { getSelectors } from '@/store/slices/employees';
import type { RootState } from '@/store';

export const {
    selectAll: selectAllEmployees,
    selectTotal: selectTotalEmployees,
    selectById: selectEmployeeById,
} = getSelectors<RootState>(state => state.employees);


export const selectStatistics = createAppSelector(
    [selectAllEmployees],
    (employees) => {
        const totalEmployees = employees.length;

        const totalImportantEmployees = employees.filter(employee => employee.isImportant).length;

        const payrollFund = employees.reduce((sum, curr) => sum + curr.salary, 0);

        const averageSalary = payrollFund && Math.round(payrollFund / totalEmployees);

        return { totalEmployees, totalImportantEmployees, payrollFund, averageSalary };
    }
);