import React from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Granpa";

const Father = ({ children }) => {
  const [money, setMoney] = React.useContext(MoneyContext);
  return (
    <div className="border-4 border-green-800 mr-1 p-3">
      <p>{children}</p>
      <p>Money: {money}</p>
      <button
        onClick={() => setMoney(money + 1)}
        className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-1 px-2 border border-gray-500 hover:border-transparent rounded ml-4"
      >
        Add Money
      </button>
      <div className="flex">
        <Cousin>Rifat</Cousin>
        <Cousin>Joy</Cousin>
      </div>
    </div>
  );
};

export default Father;
