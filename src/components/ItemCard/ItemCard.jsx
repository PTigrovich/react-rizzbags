import styles from './ItemCard.module.scss';

function ItemCard({ img, text, name }) {
    return (
        <article className={styles.itemCard}>
            <div className={styles.imageWrapper}>
                <img
                    src={process.env.PUBLIC_URL + img}
                    alt={name}
                    className={styles.productImage}
                    onError={e => {
                        e.target.src = process.env.PUBLIC_URL + '/images/placeholder.jpg';
                    }}
                />
            </div>
            <div className={styles.textContainer}>
                <h3 className={styles.productName}>{name}</h3>
                <p className={styles.productDescription}>{text}</p>
            </div>
        </article>
    );
}

export default ItemCard;
