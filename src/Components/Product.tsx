import styles from './../styles/Product.module.css';
import {useState} from 'react';

interface Iprops {
    data: (quantity : number, name : string, price : number, discount : number) => void;
}

function Product({data} : Iprops) : JSX.Element {

    const [quantity, setQuantity] = useState<number>(0);
    const [name, setName] = useState<string>("Fall Limited Edition Sneakers");
    const [price, setPrice] = useState<number>(250);
    const [discount, setDiscount] = useState<number>(0.5);
    const [image, setImage] = useState<number>(1);

    function buyItem() : void {
        data(quantity, name, price, discount);
    }

    function increment() : void {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    function decrement() : void {
        setQuantity(prevQuantity => prevQuantity === 0 ? 0 : prevQuantity - 1);
    }

    function nextImage() : void {
        switch(image) {
            case 1:
            case 2:
            case 3:
                setImage(prevImage => prevImage + 1);
                break;
            case -2:
                setImage(2);
                break;
            case -3:
                setImage(3);
                break;
            case -4:
                setImage(4);
                break;
            default:
                break;  
        }
    }

    function prevImage() : void {
        switch(image) {
            case -3:
            case -4:
                setImage(prevImage => prevImage + 1);
                break;
            case 2:
                setImage(-2);
                break;
            case 3:
                setImage(-3);
                break;
            case 4:
                setImage(-4);
                break;
            default:
                break;   
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <div onClick={prevImage} className={styles.previous}>
                    <img alt="previous" src="./../../images/product/icon-previous.svg"/>
                </div>
                <div className={styles.images}>
                    <img data-attr={image} alt="sneakers-1" src="./../../images/product/image-product-1.jpg"/>
                    <img data-attr={image} alt="sneakers-2" src="./../../images/product/image-product-2.jpg"/>
                    <img data-attr={image} alt="sneakers-3" src="./../../images/product/image-product-3.jpg"/>
                    <img data-attr={image} alt="sneakers-4" src="./../../images/product/image-product-4.jpg"/>
                </div>
                <div onClick={nextImage} className={styles.next}>
                    <img alt="next" src="./../../images/product/icon-next.svg"/>
                </div>
            </div>
            <div className={styles.description}>
                <h3>Sneaker Company</h3>
                <h1>{name}</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.</p>
            </div>
            <div className={styles.price}>
                <p>${(price * discount).toFixed(2)}</p>
                <p>{discount * 100}%</p>
                <p>${price.toFixed(2)}</p>
            </div>
            <div className={styles.quantity}>
                <img onClick={decrement} alt="minus" src="./../../images/product/icon-minus.svg" />
                <p>{quantity}</p>
                <img onClick={increment} alt="plus" src="./../../images/product/icon-plus.svg"/>
            </div>
            <div className={styles.button}>
                <button onClick={buyItem}><img alt="cart" src="./../../images/product/icon-cart.png"/>Add to cart</button>
            </div>
        </div>
    );
}

export default Product;