import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectEmployeeById } from '@/store/selectors';
import { updateEmployee } from '@/store/actions';
import type { EmployeeFormFields } from '@/types/employee';
import EmployeeForm from '../EmployeeForm';
import Modal from '../Modal';

interface EditEmployeeFormProps {
    selectedId: string;
    onCloseModal: () => void;
}

const EditEmployeeForm = ({ onCloseModal, selectedId }: EditEmployeeFormProps) => {

    const employee = useAppSelector((state) => selectEmployeeById(state, selectedId));

    const dispatch = useAppDispatch();

    const getInitialValues = () => {
        const { firstName, lastName, email, position, salary } = employee;
        return { firstName, lastName, email, position, salary: String(salary) };
    };

    const onSubmit = (employeeForm: EmployeeFormFields) => {
        const id = employee.id;
        const changes = { ...employeeForm, salary: Number(employeeForm.salary)}
        dispatch(updateEmployee({ id, changes }));
    };

    return (
        <Modal
            onClose={onCloseModal}
            title="Редактировать сотрудника"
        >
            <EmployeeForm
                submitText="Сохранить изменения"
                resetText="Сбросить"
                readOnlyFields={['firstName', 'lastName']}
                initialValues={getInitialValues()}
                onSubmit={onSubmit}
            />
        </Modal>
    );
};

export default EditEmployeeForm;