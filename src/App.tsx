import React, { useEffect, useState } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherLocation from './components/WeatherLocation/WeatherLocation';
import './i18n';

const App: React.FC = () => {
	const [locations, setLocations] = useState<string[]>(() => {
			const storedLocations = localStorage.getItem('locations');
			return storedLocations ? JSON.parse(storedLocations) : [];
	});

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
					<div className="header">
							<h1>Приложение Погода</h1>
							<SearchBar onSearch={handleSearch} />
					</div>
					<div className="weather-cards">
              {locations.map((location) => (
                  <WeatherLocation
                      key={location}
                      location={location}
                      onRemove={() => handleRemoveLocation(location)}
                  />
              )).reverse()}
          </div>
			</div>
	);
};

export default App;
