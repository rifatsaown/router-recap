import React from "react";
import Father from "./Father";

export const RingContext = React.createContext();
export const MoneyContext = React.createContext(0);

const Granpa = () => {
    const [money, setMoney] = React.useState(1);
  return (
    <div className="border-4 border-green-800 px-8 py-2 ">
      <h1 className="text-center mb-2">Granpah</h1>
        <p className="text-center">Money: {money}</p>
      <div className="flex">
        <MoneyContext.Provider value={[money,setMoney]}>
          <RingContext.Provider value="Golden Ring">
            <Father>Anwer</Father>
            <Father>Baki</Father>
            <Father>Josna</Father>
          </RingContext.Provider>
        </MoneyContext.Provider>
      </div>
    </div>
  );
};

export default Granpa;
