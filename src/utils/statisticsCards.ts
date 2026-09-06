import { Users, UserStar, Wallet, TrendingUp } from 'lucide-react';

import type { StatisticsCard } from '@/types/statistics';

export const statisticsCards: StatisticsCard[] = [
    { 
        key: 'totalEmployees', 
        title: 'Сотрудников', 
        IconComponent: Users, 
        iconClassName: 'employees-icon',
    },
    { 
        key: 'totalImportantEmployees', 
        title: 'Важные', 
        IconComponent: UserStar, 
        iconClassName: 'important-icon',
    },
    { 
        key: 'payrollFund', 
        title: 'Фонд оплаты', 
        IconComponent: Wallet, 
        iconClassName: 'salary-icon',
    },
    { 
        key: 'averageSalary', 
        title: 'Средняя З/П', 
        IconComponent: TrendingUp, 
        iconClassName: 'average-icon',
    },
];