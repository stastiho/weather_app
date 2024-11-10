import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = 'ddee477cda67410795c164711240911';

export const useWeather = (location: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
			const fetchWeather = async () => {
				const cachedData = localStorage.getItem(`weather_${location}`);
				if (cachedData) {
						setData(JSON.parse(cachedData));
						setLoading(false);
				} else {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
                setData(response.data);
								localStorage.setItem(`weather_${location}`, JSON.stringify(response.data));
						} catch (error) {
								console.error('Ошибка при получении данных о погоде:', error);
						} finally {
								setLoading(false);
						}
				}
		};

		fetchWeather();
}, [location]);

return { data, loading };
};