import React from 'react';
import Image from 'next/image';

const LetsWork = () => {
    return (
        <div>
            <div>
                <div>
                    <Image src="/marraige.jpg" width={500} height={500} alt="" />
                </div>
                <div>
                    <p>Let us work together to find a successful partner</p>
                </div>
            </div>
        </div>
    );
};

export default LetsWork;