import React, { useState } from 'react';
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
    const [isHovered, setIsHovered] = useState(false);

    const handlers = useSwipeable({
        onSwipedRight: onRemove,
    });

		return (
			<div
					{...handlers}
					className={`weather-card ${isHovered ? 'hovered' : ''}`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
			>
					<button className="remove-button" onClick={onRemove}>
							Х
					</button>
					<div className="weather-card-content">
							<h2>{location}</h2>
							<img src={weatherIcon} alt={weatherDescription} />
							<p>{t(weatherDescription?.toLowerCase().replaceAll(' ', '_'))}</p>
							<p>Температура: {temperature}°C</p>
					</div>
			</div>
	);
};

export default WeatherCard;
