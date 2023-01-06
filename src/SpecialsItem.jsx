import React, { Children } from 'react';

const SpecialsItem = ({children}) => {
    return (
        <div className='flex flex-col w-full items-center pt-2 mx-2 md:w-[1/3] md:mx-4 border border-gray-300 border-1 rounded-sm md:rounded-md'>            
            {children}

        </div>
    );
};

export default SpecialsItem;