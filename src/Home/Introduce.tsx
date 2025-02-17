import React from 'react';
import Image from 'next/image';


const Introduce = () => {
    return (
        <div className='md:flex mt-20 mx-8'>
            <div>
                <h1 className='text-4xl'>Find your perfect Match with 
                    <span className='text-orange-900'>Guidence</span> from 
                    <span className='text-orange-900'>Personalize Machmaker</span>
                </h1>
                <button className='my-8 bg-orange-900 text-white py-2 px-2 rounded-sm'>Sign up</button>
            </div>
            <div>
                <Image src="/image1.png" width={500} height={500} alt="" />
            </div>
        </div>
    );
};

export default Introduce;