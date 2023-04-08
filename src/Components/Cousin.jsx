import React from 'react';
import { MoneyContext, RingContext } from './Granpa';

const Cousin = ({children}) => {
    const ring = React.useContext(RingContext);
    const [money] = React.useContext(MoneyContext);
    return (
        <div className='border-4 border-green-800 p-2 mr-2'>
            <p>{children}</p>
            <p>{ring}</p>
            <p>{money}</p>
        </div>
    );
};

export default Cousin;