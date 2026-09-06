import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import type { EmployeeFormFields } from '@/types/employee';
import { formFields } from '@/utils/formFields';
import { employeeSchema } from '@/utils/employeeSchema';
import EmployeeTextField from '@/components/EmployeeTextField';

import './EmployeeForm.scss';

interface EmployeeFormProps {
    submitText: string;
    resetText: string;
    onSubmit: (employeeForm: EmployeeFormFields) => void;
    initialValues?: EmployeeFormFields;
    readOnlyFields?: (keyof EmployeeFormFields)[]
}

type EmployeeFormFieldsErrors = Record<keyof EmployeeFormFields, string | null>;

const EmployeeForm = ({ submitText, resetText, onSubmit, initialValues, readOnlyFields }: EmployeeFormProps) => {

    const [employeeForm, setEmployeeForm] = useState<EmployeeFormFields>({
        firstName: initialValues?.firstName ?? '',
        lastName: initialValues?.lastName ?? '',
        email: initialValues?.email ?? '',
        position: initialValues?.position ?? '',
        salary: initialValues?.salary ?? '',
    });

    const [errors, setErrors] = useState<EmployeeFormFieldsErrors>({
        firstName: null,
        lastName: null,
        email: null,
        position: null,
        salary: null,
    });

    const validate = () => {

        const result = employeeSchema.safeParse(employeeForm);

        if (result.success) {
            setErrors({
                firstName: null,
                lastName: null,
                email: null,
                position: null,
                salary: null,
            });

            return true;
        }

        const nextErrors: EmployeeFormFieldsErrors = {
            firstName: null,
            lastName: null,
            email: null,
            position: null,
            salary: null,
        };

        result.error.issues.forEach(issue => {
            const field = issue.path[0] as keyof EmployeeFormFields;

            nextErrors[field] = issue.message;
        });

        setErrors(nextErrors);

        return false;
    };

    const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setEmployeeForm(employeeForm => ({ ...employeeForm, [name]: value }));
    };

    const onHandleReset = () => {
        setEmployeeForm({
            firstName: initialValues?.firstName ?? '',
            lastName: initialValues?.lastName ?? '',
            email: initialValues?.email ?? '',
            position: initialValues?.position ?? '',
            salary: initialValues?.salary ?? '',
        });
    };

    const onHandleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validate()) return;

        onSubmit(employeeForm);
        onHandleReset();
    }

    return (
        <form onSubmit={onHandleSubmit} className="employee-form">
            {
                formFields.map(field => (
                    <EmployeeTextField
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        value={employeeForm[field.name]}
                        error={errors[field.name]}
                        readOnly={readOnlyFields?.includes(field.name)}
                        onChange={onHandleChange}
                    />
                ))
            }
            <div className="form-actions">
                <button type="button" className="form-reset-btn" onClick={onHandleReset}>
                    {resetText}
                </button>
                <button type="submit" className="form-submit-btn">
                    {submitText}
                </button>
            </div>
        </form>
    );
};

export default EmployeeForm;