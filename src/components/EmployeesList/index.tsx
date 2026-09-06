import { useState, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectAllEmployees, selectTotalEmployees } from '@/store/selectors';
import { removeEmployee, toggleEmployee } from '@/store/actions';
import type { EmployeeBooleanKeys } from '@/types/employee';

import EmptyList from '@/components/EmptyList';
import EmployeeCard from '@/components/EmployeeCard';
import EditEmployeeForm from '@/components/EditEmployeeForm';

import './EmployeesList.scss';

const EmployeesList = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState('');

    const employees = useAppSelector(selectAllEmployees);
    const totalEmployees = useAppSelector(selectTotalEmployees);

    const dispatch = useAppDispatch();

    const onOpenModal = useCallback((id: string) => {
        setIsOpenModal(true);
        setSelectedId(id);
    }, []);

    const onCloseModal = () => {
        setIsOpenModal(false);
        setSelectedId('');
    };

    const onRemove = useCallback((id: string) => {
        dispatch(removeEmployee(id));
    }, [dispatch]);

    const onToggle = useCallback((id: string, prop: EmployeeBooleanKeys) => {
        dispatch(toggleEmployee({ id, prop }));
    }, [dispatch]);   

    if (!employees.length) {
        return <EmptyList totalEmployees={totalEmployees} />;
    }

    return (
        <>
            <section className="employees">
                {
                    employees.map(employee => (
                        <EmployeeCard 
                            key={employee.id}
                            {...employee}
                            onRemove={onRemove}
                            onToggle={onToggle}
                            onOpenModal={onOpenModal}
                        />
                    ))
                }
            </section>
            {isOpenModal && <EditEmployeeForm 
                onCloseModal={onCloseModal} selectedId={selectedId} />
            }
        </>
    );
}
 
export default EmployeesList;