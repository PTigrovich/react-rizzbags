import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation(); // t = функция перевода
    
	 return (
         <footer id="contact" className={styles.footer}>
             <div className={styles.container}>
                 <div className={styles.brandInfo}>
                     <h2 className={styles.brandName}>RizzBags</h2>
                     <p className={styles.tagline}>{t('Timeless Luxury, Modern Elegance')}</p>

                     <nav className={styles.footerNav}>
                         <NavLink to="/about" className={styles.navLink}>
                             {t('About Us')}
                         </NavLink>
                         <NavLink to="" className={styles.navLink}>
                             {t('Contact')}
                         </NavLink>
                         <NavLink to="" className={styles.navLink}>
                             {t('Privacy Policy')}
                         </NavLink>
                     </nav>
                 </div>

                 <div className={styles.companyInfo}>
                     <table className={styles.infoTable}>
                         <tbody>
                             <tr>
                                 <th className={styles.headerCell}>{t('Company')}</th>
                                 <td className={styles.dataCell}>Rizz LLC</td>
                             </tr>
                             <tr>
                                 <th className={styles.headerCell}>{t('Founded')}</th>
                                 <td className={styles.dataCell}>{t('3 March 2025')}</td>
                             </tr>
                             <tr>
                                 <th className={styles.headerCell}>{t('Location')}</th>
                                 <td className={styles.dataCell}>{t('24-7 Kotobashi 4-chome, Sumida-ku, Tokyo')}</td>
                             </tr>
                             <tr>
                                 <th className={styles.headerCell}>{t('Contact')}</th>
                                 <td className={styles.dataCell}>03-6315-7523</td>
                             </tr>
                             <tr>
                                 <th className={styles.headerCell}>{t('E-mail commerce')}</th>
                                 <td className={styles.dataCell}>rizzvtg@yahoo.com</td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
             </div>

             <div className={styles.copyright}>
                 © {new Date().getFullYear()} RizzBags. {t('All rights reserved.')}
             </div>
         </footer>
     );
}

export default Footer;
