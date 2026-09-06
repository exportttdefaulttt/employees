// import { useState } from 'react';
// import { Search, X } from 'lucide-react';

// import './SearchPanel.scss';

// const SearchPanel = () => {
//     const [search, setSearch] = useState('');
//     const [filter, setFilter] = useState('all');

//     return (
//         <section className="employee-filter glass">

//             <h2 className="employee-filter__title">
//                 Найти сотрудника
//             </h2>

//             <div className="search-box">

//                 <Search
//                     size={18}
//                     className="search-icon"
//                 />

//                 <input
//                     type="text"
//                     placeholder="Введите имя сотрудника..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />

//                 {search && (
//                     <button
//                         type="button"
//                         className="clear-btn"
//                         onClick={() => setSearch('')}
//                         aria-label="Очистить поиск"
//                     >
//                         <X size={18} />
//                     </button>
//                 )}

//             </div>

//             <div className="filters">

//                 <button
//                     type="button"
//                     className={filter === 'all' ? 'active' : ''}
//                     onClick={() => setFilter('all')}
//                 >
//                     Все сотрудники
//                 </button>

//                 <button
//                     type="button"
//                     className={filter === 'bonus' ? 'active' : ''}
//                     onClick={() => setFilter('bonus')}
//                 >
//                     С премией
//                 </button>

//                 <button
//                     type="button"
//                     className={filter === 'salary' ? 'active' : ''}
//                     onClick={() => setFilter('salary')}
//                 >
//                     Зарплата выше средней
//                 </button>

//             </div>

//         </section>
//     );
// };

// export default SearchPanel;

















import { useState } from 'react';

import {
    Search,
    X,
} from 'lucide-react';

import './SearchPanel.scss';

const SearchPanel = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');

    return (
        <section className="employee-filter glass">

            <h2 className="employee-filter__title">
                Найти сотрудника
            </h2>

            <div className="search-box">

                <Search
                    size={18}
                    className="search-icon"
                />

                <input
                    type="text"
                    placeholder="Введите имя сотрудника..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {search && (
                    <button
                        type="button"
                        className="clear-btn"
                        onClick={() => setSearch('')}
                        aria-label="Очистить поиск"
                    >
                        <X size={18} />
                    </button>
                )}

            </div>

            <div className="filters">

                <button
                    type="button"
                    className={
                        filter === 'all'
                            ? 'active'
                            : ''
                    }
                    onClick={() => setFilter('all')}
                >
                    Все сотрудники
                </button>

                <button
                    type="button"
                    className={
                        filter === 'bonus'
                            ? 'active'
                            : ''
                    }
                    onClick={() => setFilter('bonus')}
                >
                    С премией
                </button>

                <button
                    type="button"
                    className={
                        filter === 'salary'
                            ? 'active'
                            : ''
                    }
                    onClick={() => setFilter('salary')}
                >
                    Выше средней З/П
                </button>

            </div>

        </section>
    );
};

export default SearchPanel;