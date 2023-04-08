import React from "react";

const Cart = ({ cart, handleRemove }) => {
  let emptyCart;
  if (cart.length === 0) {
    emptyCart = <p>Cart is empty ifelse</p>;
  }
  return (
    <div className="p-4">
      <h1 className="text-xl">Product Added {cart.length} </h1>
      {cart.length === 0 && <p>Cart is empty</p>}
      {emptyCart}
      <div className={`font-bold ${cart.length === 1?'bg-slate-500':'bg-slate-200'}`}>
        {cart.map((item) => {
          return (
            <p key={item._id}>
              {item.name}
              <button
                onClick={() => handleRemove(item._id)}
                className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-1 px-2 border border-gray-500 hover:border-transparent rounded ml-4"
              >
                X
              </button>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
