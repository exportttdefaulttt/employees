import { nanoid } from '@reduxjs/toolkit';
import type { Employee, EmployeeFormFields } from '@/types/employee';

export const prepareEmployee = (employeeForm: EmployeeFormFields) => ({
    payload: {
        id: nanoid(),
        ...employeeForm,
        salary: Number(employeeForm.salary),
        isBonus: false,
        isImportant: false,
        createdAt: new Date().toISOString(),
    } satisfies Employee,
});