import styles from './GalleryCard.module.scss';
import ItemCard from '../../components/ItemCard/ItemCard';
import { products } from '../../data/data';

function GalleryCard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textBlock}>
                <h3 className={styles.textBlock__title}>About Hermes</h3>
                <p className={styles.textBlock__description}>
                    Hermes, the renowned French luxury brand, has been synonymous with unparalleled craftsmanship and timeless sophistication for over a
                    century.
                </p>
            </div>
            <div className={styles.itemBlock}>
                {products.map(product => (
                    <ItemCard key={product.id} img={product.imageUrl} name={product.name} text={product.description} />
                ))}
            </div>
        </div>
    );
}
export default GalleryCard;
