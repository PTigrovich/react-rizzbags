import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import Switcher from '../Switcher/Switcher'

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation(); // t = функция перевода
    const handleLinkClick = (e, path) => {
        // Если это переход на Home с любой страницы
        if (path === '/') {
            e.preventDefault();
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        // Если это якорная ссылка на текущей странице
        if ((path.startsWith('#blog') || path.startsWith('#contact')) && location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(path.substring(1)); // Убираем # из id
            if (element) {
                const headerHeight = 100;
                const offsetPosition = element.offsetTop - headerHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
                window.history.pushState({}, '', path); // Обновляем URL
            }
            return;
        }

        // Для обычных переходов между страницами ничего не делаем
        // (NavLink обработает сам)
    };

    return (
        <header className={styles.header}>
            <h1 className={styles.header__logo}>RizzBags</h1>
            <nav className={styles.header__nav}>
                {/* Home - всегда ведет на главную страницу */}
                <NavLink to="/" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`} onClick={e => handleLinkClick(e, '/')}>
                    {t('Home')}
                </NavLink>

                {/* About - обычный переход на страницу */}
                <NavLink to="/about" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`}>
                    {t('About')}
                </NavLink>

                {/* Blog - якорная ссылка только на главной */}
                {location.pathname === '/' ? (
                    <a href="#blog" className={styles.nav__link} onClick={e => handleLinkClick(e, '#blog')}>
                        {t('Blog')}
                    </a>
                ) : (
                    <NavLink to="/#blog" className={styles.nav__link}>
                        {t('Blog')}
                    </NavLink>
                )}

                {/* Contact - обычный переход */}

                {location.pathname === '/' ? (
                    <a href="#contact" className={`${styles.nav__link} ${styles.navLink__contact}`} onClick={e => handleLinkClick(e, '#contact')}>
                        {t('Contact')}
                    </a>
                ) : (
                    <NavLink to="/#contact" className={`${styles.nav__link} ${styles.navLink__contact}`}>
                        {t('Contact')}
                    </NavLink>
                )}
            </nav>
				<Switcher/>
        </header>
    );
}

export default Header;
