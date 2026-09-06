import Header from '@/components/Header';
import SearchPanel from '@/components/SearchPanel';
import EmployeesList from '@/components/EmployeesList';
import AddEmployeeForm from '@/components/AddEmployeeForm';

const App = () => {

    return (
        <div className="app">
            <Header />
            <SearchPanel />
            <EmployeesList />
            <AddEmployeeForm />
        </div>
    );
}
 
export default App;