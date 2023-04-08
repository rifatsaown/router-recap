import React from 'react';

const TShirt = ({name,picture,price,gender}) => {
    
    return (
        <div>
            <img src={picture} alt={gender} />
            <h1>{name}</h1>
            <h2>{price}</h2>
        </div>
    );
};

export default TShirt;