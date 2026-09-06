import { z } from 'zod';

export const employeeSchema = z.object({
    firstName: z
        .string()
        .trim()
        .nonempty('Обязательное поле')
        .min(2, 'Имя должно содержать минимум 2 символа')
        .max(30, 'Имя должно содержать не более 30 символов'),

    lastName: z
        .string()
        .trim()
        .nonempty('Обязательное поле')
        .min(2, 'Фамилия должна содержать минимум 2 символа')
        .max(30, 'Фамилия слишком длинная'),

    email: z
        .string()
        .trim()
        .nonempty('Обязательное поле')
        .email('Некорректный email'),

    position: z
        .string()
        .trim()
        .nonempty('Обязательное поле')
        .min(2, 'Введите должность')
        .max(50, 'Слишком длинное название должности'),

    salary: z
        .string()
        .trim()
        .min(1, 'Введите зарплату')
        .refine(
            value => Number(value) > 0,
            'Зарплата должна быть больше нуля'
        ),
});