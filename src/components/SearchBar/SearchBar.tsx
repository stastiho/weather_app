import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { debounce } from '../../helpers/debounce';
import { getCitySuggestions } from '../../helpers/getCitySuggestions';

interface SearchBarProps {
    onSearch: (location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const { t } = useTranslation();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        debouncedSearch(value);
    };

    const debouncedSearch = debounce(async (value: string) => {
        if (value.trim()) {
            const suggestions = await getCitySuggestions(value);
            setSuggestions(suggestions.map((suggestion: any) => suggestion.name));
        } else {
            setSuggestions([]);
        }
    }, 300);

    const handleSearch = (location: string) => {
        onSearch(location.trim());
        setInputValue('');
        setSuggestions([]);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
								placeholder={t("search_city")}
            />
            <button onClick={() => handleSearch(inputValue)}>Поиск</button>
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((suggestion) => (
                        <li key={suggestion} onClick={() => handleSearch(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
