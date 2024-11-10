import axios from 'axios';

const API_KEY = 'ddee477cda67410795c164711240911';

export const getCitySuggestions = async (query: string) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении предложений:', error);
        return [];
    }
};
