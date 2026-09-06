import type { StatisticsCard } from "@/types/statistics";

interface StatCardProps extends StatisticsCard {
    value: number;
}
const StatCard = ({ title, value, IconComponent, iconClassName }: StatCardProps) => {

    return (
            <div className="stat-card">
                <div className="stat-card__header">
                    <span>{title}</span>
                    <IconComponent className={iconClassName} size={20} />
                </div>

                <strong>{value}</strong>
            </div>
    );
}
 
export default StatCard;