import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function Home() {
  const shop = [
    { name: "Apple", price: 100, id: 1 },
    { name: "Banana", price: 200, id: 2 },
    { name: "Orange", price: 300, id: 3 },
    { name: "Mango", price: 400, id: 4 },
    { name: "Pineapple", price: 500, id: 5 },
  ];

  const cart = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  function handleAdd(item) {
    console.log("Objekt som läggs till i kundvagnen:", item);
    dispatch(addToCart(item));
  }

  return (
    <main className="flex justify-center">
      <div>
        <h1>Shopping store</h1>
        <div className="flex">
          {shop.map((item) => (
            <ul key={item.id}>
              <p>Name: {item.name}</p>
              <p>Price: {item.price}</p>
              <button onClick={() => handleAdd(item)}>Add</button>
            </ul>
          ))}
        </div>
        <div>
          <h2>Your Cart</h2>
          {cart.map((cartItem) => (
            <li key={cartItem.id}>
              <h3>{cartItem.name}</h3>
              <p>Price:{cartItem.price}</p>
            </li>
          ))}
        </div>
      </div>
    </main>
  );
}
