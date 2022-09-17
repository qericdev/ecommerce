import {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Product from './Components/Product';

function App(): JSX.Element {

  const [quantity, setQuantity] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  function updateData(quantity : number, name : string, price : number, discount : number) : void {
    setQuantity(quantity);
    setName(name);
    setPrice(price);
    setDiscount(discount);
  }

  function modifyQuantity() : void {
    setQuantity(0);
  }

  return (
    <div className="App">
      <Navbar modifyQuantity={modifyQuantity} quantity={quantity} name={name} price={price} discount={discount}/>
      <Product data={updateData}/>
    </div>
  );
}

export default App;
