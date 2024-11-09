import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSwipeable } from 'react-swipeable';

interface WeatherCardProps {
    location: string;
    temperature: number;
    weatherIcon: string;
    weatherDescription: string;
    onRemove: () => void;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ location, temperature, weatherIcon, weatherDescription, onRemove }) => {
		const { t } = useTranslation();
    const handlers = useSwipeable({
        onSwipedRight: onRemove,
    });

    return (
        <div {...handlers} className="weather-card">
            <h2>{location}</h2>
            <img src={weatherIcon} alt={weatherDescription} />
						<p>{t(weatherDescription.toLowerCase().replaceAll(' ', '_'))}</p>
            <p>Температура: {temperature}°C</p>
        </div>
    );
};

export default WeatherCard;
