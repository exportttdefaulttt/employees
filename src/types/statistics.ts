import type { LucideIcon } from "lucide-react";

type StatisticsKeys = 'totalEmployees' | 'totalImportantEmployees' | 'payrollFund' | 'averageSalary';

export type Statistics = Record<StatisticsKeys, number>;

export type StatisticsCard = {
    key: StatisticsKeys;
    title: string;
    IconComponent: LucideIcon;
    iconClassName: string;
    formatter?: (value: number) => string;
}