import styles from './Switcher.module.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Switcher() {
    const { i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    const currentLanguage = i18n.language;

    return (
        <div className={styles['language-switcher']}>
            <button className={`${styles['language-btn']} ${currentLanguage === 'en' ? styles['active'] : ''}`} onClick={() => changeLanguage('en')}>
                EN
            </button>
            <span className={styles['divider']}>/</span>
            <button className={`${styles['language-btn']} ${currentLanguage === 'ja' ? styles['active'] : ''}`} onClick={() => changeLanguage('ja')}>
                日本語
            </button>
        </div>
    );
}

export default Switcher;
