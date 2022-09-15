import styles from './../styles/Product.module.css';

function Product() {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img alt="sneakers" src="./../../images/product/image-product-1.jpg"/>
            </div>
            <div className={styles.description}>
                <h3>Sneaker Company</h3>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.</p>
            </div>
            <div className={styles.price}>
                <p>$125.00</p>
                <p>50%</p>
                <p>$250.00</p>
            </div>
            <div className={styles.quantity}>
                <img/>
                <p>0</p>
                <img/>
            </div>
            <div>
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default Product;