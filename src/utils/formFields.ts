import type { HTMLInputTypeAttribute } from "react";
import type { EmployeeFormFields } from "@/types/employee";

export const formFields = [
    { name: 'firstName', label: 'Имя', type: 'text' },
    { name: 'lastName', label: 'Фамилия', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'position', label: 'Должность', type: 'text' },
    { name: 'salary', label: 'Зарплата', type: 'number' },
] satisfies {
    name: keyof EmployeeFormFields;
    label: string;
    type: HTMLInputTypeAttribute;
}[];