import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavBar from '../NavBar';
import AppRouter from '../AppRouter';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import useLocalStorage from '../../hooks/useLocalStorage';

function App() {
    const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'ru');
    const handleLanguageChange = (val) => {
        i18n.changeLanguage(val);
        setLanguage(val);
    };

    return (
        <BrowserRouter>
            <div onClick={handleLanguageChange}>{t("Hello")}</div>
            <NavBar handleLanguageChange={handleLanguageChange} language={language} />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
