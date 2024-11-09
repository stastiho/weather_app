import React, { useState, useEffect } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherLocation from './components/WeatherLocation/WeatherLocation';

const App: React.FC = () => {
    const [locations, setLocations] = useState<string[]>([]);

    const handleSearch = (location: string) => {
        if (!locations.includes(location)) {
            setLocations([...locations, location]);
        }
    };

    const handleRemoveLocation = (location: string) => {
        setLocations(locations.filter(loc => loc !== location));
    };

    useEffect(() => {
        const storedLocations = localStorage.getItem('locations');
        if (storedLocations) {
            setLocations(JSON.parse(storedLocations));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('locations', JSON.stringify(locations));
    }, [locations]);

    return (
        <div className="app">
            <h1>Приложение Погода</h1>
            <SearchBar onSearch={handleSearch} />
            <div className="weather-cards">
                {locations.map((location) => (
                    <WeatherLocation
                        key={location}
                        location={location}
                        onRemove={() => handleRemoveLocation(location)}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
