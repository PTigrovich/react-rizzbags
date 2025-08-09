import { useEffect } from 'react'; // Добавьте этот импорт
import styles from './About.module.scss';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import Footer from '../../components/Footer/Footer';

function About() {
    // Скролл вверх при загрузке страницы
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.content}>
            <Header />
            <h2 className={styles.content__title}>About us</h2>
            <div className={styles.aboutUs}>
                <div className={styles.aboutUs__photo} alt="photo"></div>
                <h3 className={styles.aboutUs__title}>Only love and value last forever</h3>
                <p className={styles.aboutUs__text}>
                    RizzBags｜For today, RizzBags has been deeply engaged in the recycling, consignment, exchange, and sale of Hermès items, securing a
                    prominent position in Japan’s well-established luxury second-hand market. It is known as "The Hermès Sanctuary Within Reach." Located in
                    Tokyo, the flagship store regularly holds a rich inventory of hundreds of pre-owned and brand-new Hermès bags, with more than half being
                    popular items that are difficult to obtain at boutiques, and some even rare collectible treasures. We are committed to expanding our global
                    reach, not only to collect more high-quality items from around the world but also to bring professional and attentive service to Hermès
                    enthusiasts globally. RizzBags has set up stores in the three major cities of Asia, including RizzBags Hong Kong and RizzBags Singapore.
                    Each store is staffed with top appraisers appointed by our headquarters in Japan to strictly assess every Hermès item recycled or consigned.
                    To date, both overseas stores have earned the trust of customers and become one of the shops with the largest Hermès inventories at current
                    market prices in the region. Through the constantly updated multilingual official online store and social media platforms, we provide Hermès
                    enthusiasts worldwide with a free space to "discover your dream bag and let go of your beloved one." Here, Hermès experts with nearly 30
                    years of experience in Japan carefully select every Hermès item for you. With their lifetime of expertise and market-leading insight, they
                    offer you precise guidance on recycling and consigning your Hermès items. Our professional team thoroughly understands market trends and
                    fluctuations worldwide, recycling thousands of Hermès bags and accessories annually. In recent years, we have also introduced a number of
                    personalized VIP services within the industry to better meet the diverse needs of customers in selling and purchasing Hermès items.
                </p>
            </div>
            <Table />
            <Footer />
        </div>
    );
}
export default About;

