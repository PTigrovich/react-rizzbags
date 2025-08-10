import { useState, useEffect } from 'react';
import styles from './Main.module.scss';
import { NavLink } from 'react-router-dom';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useTranslation } from 'react-i18next';

function Main() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const blogSection = document.getElementById('blog');
            const contactSection = document.getElementById('contact');
            const scrollPosition = window.scrollY + 100;

            if (contactSection && scrollPosition >= contactSection.offsetTop) {
                setActiveSection('contact');
            } else if (blogSection && scrollPosition >= blogSection.offsetTop) {
                setActiveSection('blog');
            } else {
                setActiveSection('home');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { t } = useTranslation(); // t = функция перевода

    const handleScrollTo = (e, id) => {
        e.preventDefault();
        setActiveSection(id); // Устанавливаем активную секцию при клике

        if (id === 'home') {
            window.history.pushState({}, '', '/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            const headerHeight = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.history.pushState({}, '', `/#${id}`);
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.greetings}>
                <div className={styles.greetings__text}>
                    <h2 className={styles.text__title}>{t('Discover the Finest Hermes')}</h2>
                    <p className={styles.text__description}>
                        {t(
                            'Welcome to our exclusive Hermes handbag boutique, where exquisite craftsmanship and timeless elegance converge. Explore our curated collection of premium leather goods.'
                        )}
                    </p>
                    <nav className={styles.text__nav}>
                        <NavLink to="/about" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`}>
                            {t('About')}
                        </NavLink>
                        <NavLink
                            to="/#blog"
                            className={({ isActive }) => `${styles.nav__link} ${isActive || activeSection === 'blog' ? styles.active : ''}`}
                            onClick={e => handleScrollTo(e, 'blog')}
                        >
                            {t('Blog')}
                        </NavLink>
                        <NavLink to="/#contact" className={({ isActive }) => `${styles.nav__link} ${isActive ? styles.active : ''}`}>
                            {t('Contact')}
                        </NavLink>
                    </nav>
                </div>
                <div className={styles.greetings__logo}></div>
            </div>
            <div id="blog" className={styles.blog}>
                <GalleryCard />
            </div>
            <Footer />
        </div>
    );
}

export default Main;
