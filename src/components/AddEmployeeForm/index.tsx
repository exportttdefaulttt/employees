import { useAppDispatch } from '@/store/hooks';
import { addEmployee } from '@/store/actions';
import type { EmployeeFormFields } from '@/types/employee';

import EmployeeForm from '@/components/EmployeeForm';

import './AddEmployeeForm.scss';

const AddEmployeeForm = () => {
    
    const dispatch = useAppDispatch();
    
    const onAdd = (employeeForm: EmployeeFormFields) => {
        dispatch(addEmployee(employeeForm));
    }

    return (
        <section className="add-employee">
            <div className="section-header">
                <h2>Добавить сотрудника</h2>
                <p>Заполните данные нового сотрудника</p>
            </div>
            <EmployeeForm 
                submitText="Добавить сотрудника"
                resetText="Очистить"
                onSubmit={onAdd}
            />
        </section>
    );
};

export default AddEmployeeForm;