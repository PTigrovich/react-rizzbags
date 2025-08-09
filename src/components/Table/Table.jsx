import styles from './Table.module.scss';


function Table() {
    return (
        <div className={styles.companyInfo}>
            <h2 className={styles.title}>Company Information</h2>

            <div className={styles.tableContainer}>
                <table className={styles.infoTable}>
                    <tbody>
                        <tr>
                            <th className={styles.headerCell}>Company Name</th>
                            <td className={styles.dataCell}>Rizz LLC</td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>Date of Establishment</th>
                            <td className={styles.dataCell}>3 March 2025</td>
                        </tr>

                        <tr>
                            <th className={styles.headerCell}>Phone</th>
                            <td className={styles.dataCell}>03-6315-7523</td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>Location</th>
                            <td className={styles.dataCell}>
                                24-7 Kotobashi 4-chome,
                                <br />
                                Sumida-ku, Tokyo
                            </td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>CEO</th>
                            <td className={styles.dataCell}>Dorofeyev Vadim</td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>Managing Partner</th>
                            <td className={styles.dataCell}>lei Kei</td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>Representative Director</th>
                            <td className={styles.dataCell}>
                                <div className={styles.directorsContainer}>
                                    <div className={styles.directorItem}>Dorofeyev Vadim</div>
                                    <div className={styles.directorDivider}></div>
                                    <div className={styles.directorItem}>Yoon Young Gul</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>Capital</th>
                            <td className={styles.dataCell}>5.15 million yen</td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>Employees</th>
                            <td className={styles.dataCell}>10</td>
                        </tr>
                        <tr>
                            <th className={styles.headerCell}>Business Contents</th>
                            <td className={styles.dataCell}>
                                <ul className={styles.businessList}>
                                    <li>Sales and purchase of antiquities</li>
                                    <li>Import, processing, and sale of bags, precious metals, jewelry, watches, antiques, etc.</li>
                                    <li>Information provision service and communication with the Internet</li>
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