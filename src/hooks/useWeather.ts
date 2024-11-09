import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = 'ddee477cda67410795c164711240911';

export const useWeather = (location: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (location) {
            fetchWeather();
        }
    }, [location]);

    return { data, loading };
};
