import { useAppSelector } from '@/store/hooks';
import { selectStatistics } from '@/store/selectors';
import { statisticsCards } from '@/utils/statisticsCards';
import StatCard from '@/components/StatisticsCard';

import './Statistics.scss';

const Statistics = () => {

    const statistics = useAppSelector(selectStatistics);

    return (
        <div className="statistics">
            {
                statisticsCards.map(({key, ...props}) => (
                    <StatCard
                        key={key}
                        {...props}
                        value={statistics[key]}
                    />
                ))
            }
        </div>
    );
};

export default Statistics;