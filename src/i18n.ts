import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "clear_sky": "Clear Sky",
            "partly_cloudy": "Partly Cloudy",
            "clouds": "Clouds",
            "overcast": "Overcast",
            "light_rain": "Light Rain",
            "moderate_rain": "Moderate Rain",
            "heavy_rain": "Heavy Rain",
            "light_rain_shower": "Light Rain Shower",
            "moderate_rain_shower": "Moderate Rain Shower",
            "heavy_rain_shower": "Heavy Rain Shower",
            "light_snow": "Light Snow",
            "moderate_snow": "Moderate Snow",
            "heavy_snow": "Heavy Snow",
            "snow_grains": "Snow Grains",
            "light_snow_shower": "Light Snow Shower",
            "moderate_snow_shower": "Moderate Snow Shower",
            "heavy_snow_shower": "Heavy Snow Shower",
            "heavy_snow_shower": "Patchy rain nearby",
            "thunderstorm": "Thunderstorm",
            "drizzle": "Drizzle",
            "mist": "Mist",
            "smoke": "Smoke",
            "haze": "Haze",
            "dust": "Dust",
            "fog": "Fog",
            "sand": "Sand",
            "ash": "Ash",
            "squall": "Squall",
            "tornado": "Tornado",
            "search_city": "Search City",
        }
    },
    ru: {
        translation: {
            "clear_sky": "Ясное небо",
            "partly_cloudy": "Переменная облачность",
            "clouds": "Облачно",
            "overcast": "Пасмурно",
            "light_rain": "Легкий дождь",
            "moderate_rain": "Умеренный дождь",
            "heavy_rain": "Сильный дождь",
            "light_rain_shower": "Легкий дождь с ливнем",
            "moderate_rain_shower": "Умеренный дождь с ливнем",
            "heavy_rain_shower": "Сильный дождь с ливнем",
            "light_snow": "Легкий снег",
            "moderate_snow": "Умеренный снег",
            "heavy_snow": "Сильный снег",
            "snow_grains": "Снежные зерна",
            "light_snow_shower": "Легкий снег с ливнем",
            "moderate_snow_shower": "Умеренный снег с ливнем",
            "heavy_snow_shower": "Мелкий дождь в окрестностях",
            "patchy_rain_nearby": "",
            "thunderstorm": "Гроза",
            "drizzle": "Морось",
            "mist": "Туман",
            "smoke": "Дым",
            "haze": "Мгла",
            "dust": "Пыль",
            "fog": "Туман",
            "sand": "Песок",
            "ash": "Пепел",
            "squall": "Шквал",
            "tornado": "Торнадо",
            "search_city": "Поиск города",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru",
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
