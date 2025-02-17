import React from 'react';
import { MdOutlineSecurity } from "react-icons/md";
import Image from 'next/image';


const KeyFeatures = () => {
    return (
        <div className='mx-4'>
            <h1 className='text-5xl flex justify-center my-8'>Key Fetures</h1>
            <p className='text-center text-2xl my-8'>
                A meaningful connection through a blend of AI powered machmaking and expert marrage counseller.
            </p>
            <div className='md:flex mx-4 gap-4'>
                <div className='md:w-1/3 bg-gray-200 rounded-sm p-4'>
                    <p className='text-2xl h-20 text-center'>Your data is protected</p>
                    <div className='flex justify-center items-center'>
                    <MdOutlineSecurity className='w-[50px] h-[50px] text-gray-400' />
                    </div>
                    <br />
                    <p>Your data is protected. Its not public. Only expert marraige counsellor have the access of the data</p>


                </div>
                <div className='md:w-1/3 bg-gray-200 rounded-sm p-4'>
                    <p className='text-2xl h-20 text-center '>Expert marraige counsellr</p>
                    <div className='flex justify-center items-center'>
                    <Image src="/icon-marraige.png" width={50} height={50}  alt="" />
                    </div>
                    <br />
                    <p>You are not alone. The expert counsellor with communicate with you to find the chemistry of your mind and help you to find your match!!</p>


                </div>
                <div className='md:w-1/3 bg-gray-200 rounded-sm p-4'>
                    <p className='text-2xl h-20 text-center'>Integrated data</p>
                    <div className='flex justify-center items-center'>
                    <Image src="/icon-integrity.png" width={50} height={50} alt="" />
                    </div>
                    <br />
                    <p>We maintain 100% integrity of the data. To collect the required data our marraige consellor take part. So the profile are 99.99% correct!!</p>


                </div>
            </div>
            <div className='flex items-center justify-center'>

            
            <button className='my-8 bg-orange-900 text-white py-2 px-2 rounded-sm mx-auto'>Explore More</button>
            </div>
        </div>
    );
};

export default KeyFeatures;