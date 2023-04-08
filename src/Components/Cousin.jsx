import React from 'react';
import { RingContext } from './Granpa';

const Cousin = ({children}) => {
    const ring = React.useContext(RingContext);
    return (
        <div className='border-4 border-green-800 p-2 mr-2'>
            <p>{children}</p>
            <p>{ring}</p>
        </div>
    );
};

export default Cousin;