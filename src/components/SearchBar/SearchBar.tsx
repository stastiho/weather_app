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
    const [errorMessage, setErrorMessage] = useState('');
    const { t } = useTranslation();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setErrorMessage('');
        if (value.trim()) {
            debouncedSearch(value);
        } else {
            setSuggestions([]);
            setErrorMessage('');
        }
    };

    const debouncedSearch = debounce(async (value: string) => {
        if (value.trim()) {
            try {
                const suggestions = await getCitySuggestions(value);
                if (suggestions.length === 0) {
                    setErrorMessage(t("error_message"));
                } else {
                    setSuggestions(suggestions.map((suggestion: any) => suggestion.name));
                }
            } catch (error) {
                setErrorMessage(t("error_message"));
            }
        } else {
            setSuggestions([]);
            setErrorMessage('');
        }
    }, 300);

    const handleSearch = (location: string) => {
        if (suggestions.includes(location)) {
            onSearch(location.trim());
            setInputValue('');
            setSuggestions([]);
        } else {
            setErrorMessage(t("error_message"));
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
            <button onClick={() => handleSearch(inputValue)} disabled={!inputValue.trim()}>
                {t("search")}
            </button>
            {errorMessage && <div className="error">{errorMessage}</div>}
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
