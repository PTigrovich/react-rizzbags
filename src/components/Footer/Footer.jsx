import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandInfo}>
                    <h2 className={styles.brandName}>RizzBags</h2>
                    <p className={styles.tagline}>Timeless Luxury, Modern Elegance</p>

                    <nav className={styles.footerNav}>
                        <NavLink to="/about" className={styles.navLink}>
                            About Us
                        </NavLink>
                        <NavLink to="" className={styles.navLink}>
                            Contact
                        </NavLink>
                        <NavLink to="" className={styles.navLink}>
                            Privacy Policy
                        </NavLink>
                    </nav>
                </div>

                <div className={styles.companyInfo}>
                    <table className={styles.infoTable}>
                        <tbody>
                            <tr>
                                <th className={styles.headerCell}>Company</th>
                                <td className={styles.dataCell}>Rizz LLC</td>
                            </tr>
                            <tr>
                                <th className={styles.headerCell}>Founded</th>
                                <td className={styles.dataCell}>3 March 2025</td>
                            </tr>
                            <tr>
                                <th className={styles.headerCell}>Location</th>
                                <td className={styles.dataCell}>24-7 Kotobashi 4-chome, Sumida-ku, Tokyo</td>
                            </tr>
                            <tr>
                                <th className={styles.headerCell}>Contact</th>
                                <td className={styles.dataCell}>0106-03-011416</td>
                            </tr>
                            <tr>
                                <th className={styles.headerCell}>E-mail commerce</th>
                                <td className={styles.dataCell}>hyemoe@sobaka.jp</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={styles.copyright}>© {new Date().getFullYear()} RizzBags. All rights reserved.</div>
        </footer>
    );
}

export default Footer;
