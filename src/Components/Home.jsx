import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import TShirt from "./TShirt";
import { toast } from "react-hot-toast";

const Home = () => {
  const data = useLoaderData();
  const [cart, setCart] = React.useState([]);
  const handleCart = (product) => {
    if (cart.find((item) => item._id === product._id)) {
        toast.error("Already in cart");
    } else {
      setCart([...cart, product]);
        toast.success("Added to cart");
    }
  };
  const handleRemove = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  return (
    <div className="grid grid-cols-6">
      <div className="col-span-5 grid grid-cols-3 gap-4">
        {data.map((item) => {
          return <TShirt key={item._id} {...item} handleCart={handleCart} />;
        })}
      </div>
      <div className="bg-red-300 rounded-xl">
        <Cart cart={cart} handleRemove={handleRemove}></Cart>
      </div>
    </div>
  );
};

export default Home;
