import {useState} from 'react';
import styles from './../styles/Modal.module.css';

interface Iprops {
    activeModal: (isModalActive : boolean) => void
}

function Modal({activeModal} : Iprops) :JSX.Element{

    const [imageDesktop, setImageDesktop] = useState<number>(1);

    function changeImageDesktop(imgNumber : number) : void {
        setImageDesktop(imgNumber);
    }

    function prevImage() {
        setImageDesktop(prevImageDesktop => imageDesktop === 1 ? 1 : prevImageDesktop - 1);
    }

    function nextImage() {
        setImageDesktop(prevImageDesktop => imageDesktop === 4 ? 4 : prevImageDesktop + 1);
    }

    function setActiveModal() : void {
        activeModal(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img onClick={setActiveModal} className={styles.close} alt="close" src="./../../images/icon-close.svg"/>
                <div onClick={prevImage} className={styles.previous}>
                    <img alt="previous" src="./../../images/product/icon-previous.svg"/>
                </div>
                <div className={styles.images}>
                    <img alt="sneakers" src={`./../../images/product/image-product-${imageDesktop}.jpg`}/>
                </div>
                <div className={styles.thumbnails}>
                    <div onClick={() => changeImageDesktop(1)} className={imageDesktop === 1 ? styles.thumbnailSelected1 : styles.thumbnailUnselected1}></div>
                    <div onClick={() => changeImageDesktop(2)} className={imageDesktop === 2 ? styles.thumbnailSelected2 : styles.thumbnailUnselected2}></div>
                    <div onClick={() => changeImageDesktop(3)} className={imageDesktop === 3 ? styles.thumbnailSelected3 : styles.thumbnailUnselected3}></div>
                    <div onClick={() => changeImageDesktop(4)} className={imageDesktop === 4 ? styles.thumbnailSelected4 : styles.thumbnailUnselected4}></div>
                </div>
                <div onClick={nextImage} className={styles.next}>
                    <img alt="next" src="./../../images/product/icon-next.svg"/>
                </div>
            </div>
        </div>
    );
}

export default Modal;