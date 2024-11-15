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
            "patchy_rain_nearby": "Patchy rain nearby",
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
            "clear": "Clear",
            "sunny": "Sunny",
            "cloudy": "Cloudy",
            "rainy": "Rainy",
            "windy": "Windy",
            "stormy": "Stormy",
            "foggy": "Foggy",
            "patchy_rain_possible": "Patchy rain possible",
            "patchy_snow_possible": "Patchy snow possible",
            "patchy_sleet_possible": "Patchy sleet possible",
            "patchy_freezing_drizzle_possible": "Patchy freezing drizzle possible",
            "thundery_outbreaks_possible": "Thundery outbreaks possible",
            "blowing_snow": "Blowing snow",
            "blizzard": "Blizzard",
            "freezing_fog": "Freezing fog",
            "patchy_light_drizzle": "Patchy light drizzle",
            "light_drizzle": "Light drizzle",
            "freezing_drizzle": "Freezing drizzle",
            "heavy_freezing_drizzle": "Heavy freezing drizzle",
            "patchy_light_rain": "Patchy light rain",
            "moderate_rain_at_times": "Moderate rain at times",
            "heavy_rain_at_times": "Heavy rain at times",
            "light_freezing_rain": "Light freezing rain",
            "moderate_or_heavy_freezing_rain": "Moderate or heavy freezing rain",
            "light_sleet": "Light sleet",
            "moderate_or_heavy_sleet": "Moderate or heavy sleet",
            "patchy_light_snow": "Patchy light snow",
            "patchy_moderate_snow": "Patchy moderate snow",
            "patchy_heavy_snow": "Patchy heavy snow",
            "ice_pellets": "Ice pellets",
            "moderate_or_heavy_rain_shower": "Moderate or heavy rain shower",
            "torrential_rain_shower": "Torrential rain shower",
            "light_sleet_showers": "Light sleet showers",
            "moderate_or_heavy_sleet_showers": "Moderate or heavy sleet showers",
            "light_snow_showers": "Light snow showers",
            "moderate_or_heavy_snow_showers": "Moderate or heavy snow showers",
            "light_showers_of_ice_pellets": "Light showers of ice pellets",
            "moderate_or_heavy_showers_of_ice_pellets": "Moderate or heavy showers of ice pellets",
            "patchy_light_rain_with_thunder": "Patchy light rain with thunder",
            "moderate_or_heavy_rain_with_thunder": "Moderate or heavy rain with thunder",
            "patchy_light_snow_with_thunder": "Patchy light snow with thunder",
            "moderate_or_heavy_snow_with_thunder": "Moderate or heavy snow with thunder",
						"error_message": "No matching location found.",
						"search": "Search",
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
            "heavy_snow_shower": "Сильный снег с ливнем",
            "patchy_rain_nearby": "Мелкий дождь",
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
            "clear": "Ясно",
            "sunny": "Солнечно",
            "cloudy": "Облачно",
            "rainy": "Дождливо",
            "windy": "Ветрено",
            "stormy": "Штормово",
            "foggy": "Туманно",
            "patchy_rain_possible": "Возможен мелкий дождь",
            "patchy_snow_possible": "Возможен мелкий снег",
            "patchy_sleet_possible": "Возможен мелкий дождь со снегом",
            "patchy_freezing_drizzle_possible": "Возможна мелкая ледяная морось",
            "thundery_outbreaks_possible": "Возможны грозовые ливни",
            "blowing_snow": "Метель",
            "blizzard": "Буран",
            "freezing_fog": "Ледяной туман",
            "patchy_light_drizzle": "Мелкая морось",
            "light_drizzle": "Легкая морось",
            "freezing_drizzle": "Ледяная морось",
            "heavy_freezing_drizzle": "Сильная ледяная морось",
            "patchy_light_rain": "Мелкий дождь",
            "moderate_rain_at_times": "Периодический умеренный дождь",
            "heavy_rain_at_times": "Периодический сильный дождь",
            "light_freezing_rain": "Легкий ледяной дождь",
            "moderate_or_heavy_freezing_rain": "Умеренный или сильный ледяной дождь",
            "light_sleet": "Легкий дождь со снегом",
            "moderate_or_heavy_sleet": "Умеренный или сильный дождь со снегом",
            "patchy_light_snow": "Мелкий снег",
            "patchy_moderate_snow": "Периодический умеренный снег",
            "patchy_heavy_snow": "Периодический сильный снег",
            "ice_pellets": "Ледяные гранулы",
            "moderate_or_heavy_rain_shower": "Умеренный или сильный дождь с ливнем",
            "torrential_rain_shower": "Ливневый дождь",
            "light_sleet_showers": "Легкий дождь со снегом",
            "moderate_or_heavy_sleet_showers": "Умеренный или сильный дождь со снегом",
            "light_snow_showers": "Легкий снег с ливнем",
            "moderate_or_heavy_snow_showers": "Умеренный или сильный снег с ливнем",
            "light_showers_of_ice_pellets": "Легкий дождь с ледяными гранулами",
            "moderate_or_heavy_showers_of_ice_pellets": "Умеренный или сильный дождь с ледяными гранулами",
            "patchy_light_rain_with_thunder": "Мелкий дождь с грозой",
            "moderate_or_heavy_rain_with_thunder": "Умеренный или сильный дождь с грозой",
            "patchy_light_snow_with_thunder": "Мелкий снег с грозой",
            "moderate_or_heavy_snow_with_thunder": "Умеренный или сильный снег с грозой",
						"error_message": "Не найдено совпадающих мест.",
						"search": "Поиск",
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
