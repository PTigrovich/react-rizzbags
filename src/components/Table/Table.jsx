import styles from './Table.module.scss';
import { useTranslation } from 'react-i18next';

function Table() {
    const { t } = useTranslation(); // t = функция перевода

    return (
        <div className={styles.companyInfo}>
            <h2 className={styles.title}>{t('Company Information')}</h2>

            <div className={styles.tableContainer}>
                <table className={styles.infoTable}>
                    <tbody>
                        <tr>
                            <th className={styles.headerCell}>{t('Company Name')}</th>
                            <td className={styles.dataCell}>Rizz LLC</td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>{t('Date of Establishment')}</th>
                            <td className={styles.dataCell}>{t('3 March 2025')}</td>
                        </tr>

                        <tr>
                            <th className={styles.headerCell}>{t('Phone')}</th>
                            <td className={styles.dataCell}>03-6315-7523</td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>{t('Location')}</th>
                            <td className={styles.dataCell}>
                                {t('24-7 Kotobashi 4-chome,')}
                                <br />
                                {t('Sumida-ku, Tokyo')}
                            </td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>{t('CEO')}</th>
                            <td className={styles.dataCell}>{t('Dorofeyev Vadim')}</td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>{t('Managing Partner')}</th>
                            <td className={styles.dataCell}>{t('lei Kei')}</td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>{t('Representative Director')}</th>
                            <td className={styles.dataCell}>
                                <div className={styles.directorsContainer}>
                                    <div className={styles.directorItem}>{t('Dorofeyev Vadim')}</div>
                                    <div className={styles.directorDivider}></div>
                                    <div className={styles.directorItem}>{t('Yoon Young Gul')}</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>{t('Capital')}</th>
                            <td className={styles.dataCell}>{t('5.15 million yen')}</td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>{t('Employees')}</th>
                            <td className={styles.dataCell}>10</td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>{t('Business Contents')}</th>
                            <td className={styles.dataCell}>
                                <ul className={styles.businessList}>
                                    <li>{t('Sales and purchase of antiquities')}</li>
                                    <li>{t('Import, processing, and sale of bags, precious metals, jewelry, watches, antiques, etc.')}</li>
                                    <li>{t('Information provision service and communication with the Internet')}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;