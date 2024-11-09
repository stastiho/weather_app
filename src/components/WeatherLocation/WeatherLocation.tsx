import React from 'react';
import { useWeather } from '../../hooks/useWeather';
import WeatherCard from '../WeatherCard/WeatherCard';

interface WeatherLocationProps {
    location: string;
    onRemove: () => void;
}

const WeatherLocation: React.FC<WeatherLocationProps> = ({ location, onRemove }) => {
    const { data, loading } = useWeather(location);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    return (
        <WeatherCard
            location={data?.location.name || location}
            temperature={data?.current.temp_c || 0}
            weatherIcon={data?.current.condition.icon}
            weatherDescription={data?.current.condition.text}
            onRemove={onRemove}
        />
    );
};

export default WeatherLocation;
