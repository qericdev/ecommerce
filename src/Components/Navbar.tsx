import {useState, useEffect} from 'react';
import styles from './../styles/Navbar.module.css';

interface Iprops {
    modifyQuantity: () => void,
    quantity : number,
    name: string,
    price : number,
    discount : number
}

function Navbar({modifyQuantity, quantity, name, price, discount} : Iprops) : JSX.Element {

    const [menuOn, setMenuOn] = useState<boolean>(false);
    const [showCart, setShowCart] = useState<boolean>(false);
    const [loadCounter, setLoadCounter] = useState<number>(0);

    function turnMenuOnOff() : void {
        setMenuOn(prevMenuOn => !prevMenuOn);
        setLoadCounter(prevLoadCounter => prevLoadCounter + 1);
    }

    function turnShowCartOnOff() : void {
        setShowCart(prevShowCart => !prevShowCart);
    }

    function remove() : void {
        modifyQuantity();
    }

    return (
        <div className={styles.container}>
            <img onClick={turnMenuOnOff} className={styles.menu} alt="menu" src="./../../images/navbar/icon-menu.svg"/>
            <img className={styles.logo} alt="logo" src="./../../images/navbar/logo.svg"/>
            <nav className={styles.menuDesktop}>
                <ul className={styles.list}>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className={styles.cart}>
                <img onClick={turnShowCartOnOff}  alt="cart" src="./../../images/navbar/icon-cart.svg" />
                <button className={quantity > 0 ? styles.counter : styles.counterOff}>{quantity}</button>
            </div>
            <img className={styles.avatar} alt="avatar" src="./../../images/navbar/image-avatar.png"/>
            
            <nav className={menuOn ? styles.menuOn : loadCounter > 0 ? styles.menuOff : styles.menuFirstLoad}>
                <div className={styles.options}>
                    <img onClick={turnMenuOnOff} className={styles.close} alt="close" src="./../../images/navbar/icon-close.svg"/>
                    <ul className={styles.list}>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={styles.darkFilter}>
                </div>
            </nav>
            <div className={showCart ? styles.cartOptions : styles.cartOptionsOff}>
                <div>
                    <h3>Cart</h3>
                </div>
                {
                quantity === 0 ?
                <div>
                    <p>Your cart is empty.</p>
                </div>
                :
                <div>
                    <div className={styles.cartDetails}>
                        <img alt="product" src="./../../images/navbar/image-product-1-thumbnail.jpg"/>
                        <div>
                            <p>{name}</p>
                            <p>${(price * discount).toFixed(2)} x {quantity}<span>${(price * discount * quantity).toFixed(2)}</span></p>
                        </div>
                        <img onClick={remove} alt="remove" src="./../../images/navbar/icon-delete.svg"/>
                    </div>
                    <button className={styles.checkout}>Checkout</button>
                </div>
                }
            </div>
        </div>
    );
}

export default Navbar;
