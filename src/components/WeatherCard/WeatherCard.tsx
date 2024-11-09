import React from 'react';

interface WeatherCardProps {
    location: string;
    temperature: number;
    weatherIcon: string;
    weatherDescription: string;
    onRemove: () => void;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ location, temperature, weatherIcon, weatherDescription, onRemove }) => {
    return (
        <div className="weather-card">
            <h2>{location}</h2>
            <img src={weatherIcon} alt={weatherDescription} />
            <p>{weatherDescription}</p>
            <p>Температура: {temperature}°C</p>
            <button onClick={onRemove}>Удалить</button>
        </div>
    );
};

export default WeatherCard;
