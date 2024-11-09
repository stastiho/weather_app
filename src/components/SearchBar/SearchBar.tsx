import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface SearchBarProps {
    onSearch: (location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
		const { t } = useTranslation();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        if (inputValue.trim()) {
            onSearch(inputValue.trim());
            setInputValue('');
            setSuggestions([]);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
								placeholder={t("search_city")}
            />
            <button onClick={handleSearch}>Поиск</button>
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((suggestion) => (
                        <li key={suggestion} onClick={() => handleSearch()}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;