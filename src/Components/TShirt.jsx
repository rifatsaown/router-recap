import React from 'react';

const TShirt = (props) => {
    const {name,picture,price,gender,handleCart} = props;
    return (
        <div className=' w-3/4 border-4 p-4 relative'>
            <img className='rounded-lg' src={picture} alt={gender} />
            <h1>{name}</h1>
            <h2>{price}</h2>
            <button onClick={()=>handleCart(props)} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded absolute right-2 bottom-2'>Add To Cart</button>
        </div>
    );
};

export default TShirt;