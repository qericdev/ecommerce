import {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Modal from './Components/Modal';
import { act } from '@testing-library/react';

function App(): JSX.Element {

  const [quantity, setQuantity] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [isModalActive, setModalActive] = useState<boolean>(false);

  function updateData(quantity : number, name : string, price : number, discount : number) : void {
    setQuantity(quantity);
    setName(name);
    setPrice(price);
    setDiscount(discount);
  }

  function activeModal(isModalActive : boolean) {
    setModalActive(isModalActive);
  }

  function modifyQuantity() : void {
    setQuantity(0);
  }

  return (
    <div className="App">
      <Navbar modifyQuantity={modifyQuantity} quantity={quantity} name={name} price={price} discount={discount}/>
      <Product data={updateData} activeModal={activeModal}/>
      {isModalActive ? <Modal activeModal={activeModal}/> : <div></div>}
    </div>
  );
}

export default App;
