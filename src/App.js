import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState({});
  const updateCart = (index) => {
    let newCart = cart;
    if(newCart[index]){
      newCart[index]+=1;
    } else {
      newCart[index]= 1;
    }
    setCart({...newCart})
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <br/>
      <div className="BakeryGrid">
      {bakeryData.map((item, index) => { // TODO: map bakeryData to BakeryItem components
        return (
              <CartItems updateCart={updateCart} item={item} index={index} />
        )
        })}
      </div>
      <br/>
      <div>
        <h2>Cart</h2>
        {Object.keys(cart).map((key) => {
          console.log(key)
          return (
            <p> {bakeryData[key].name + ": " + cart[key]} </p>
          )
        })}
      </div>
    </div>
  );
}

function CartItems(props){
  return (
    <div className="BakeryItem">
      <img src={props.item.image} alt={props.item.name} width="50%"/>
      <br/>
      <button onClick={() => props.updateCart(props.index)}> {props.item.name} </button>
    </div>
  )
}

export default App;
