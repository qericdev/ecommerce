import {useState} from 'react';
import styles from './../styles/Navbar.module.css';

function Navbar() : JSX.Element {

    const [menuOn, setMenuOn] = useState<boolean>(false);
    const [loadCounter, setLoadCounter] = useState<number>(0);

    function turnMenuOnOff() : void {
        setMenuOn(prevMenuOn => !prevMenuOn);
        setLoadCounter(prevLoadCounter => prevLoadCounter + 1);
    }

    return (
        <div className={styles.container}>
            <img onClick={turnMenuOnOff} className={styles.menu} alt="menu" src="./../../images/navbar/icon-menu.svg"/>
            <img className={styles.logo} alt="logo" src="./../../images/navbar/logo.svg"/>
            <img className={styles.cart} alt="cart" src="./../../images/navbar/icon-cart.svg" />
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
        </div>
    );
}

export default Navbar;
