import React from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "./TShirt";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
        {
            data.map((item) => {
                return <TShirt key={item._id} {...item} />
            })
        }
    </div>
  );
};

export default Home;
