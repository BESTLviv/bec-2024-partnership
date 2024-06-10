import React from 'react';
import Title from './Title';
import { PARTNERS } from '/src/data.js';
import { useState, useEffect } from 'react';

export default function Partners() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const chunkArray = (array, sizes) => {
        let index = 0;
        return sizes.map(size => {
            const chunk = array.slice(index, index + size);
            index += size;
            return chunk;
        });
    };

    const rowSizes = isMobile ? [2, 2, 3, 2, 2, 2] : [2, 3, 3, 3, 2];
    const chunkedPartners = chunkArray(PARTNERS, rowSizes);
    console.log(chunkedPartners);

    return (
        <div className="text-white px-[15px] mb-[150px]">
            <Title className="text-center px-[40px] mb-[35px] lg:mb-[64px]">НАС ПІДТРИМУЮТЬ</Title>
            {chunkedPartners.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center mb-2 lg:mb-[80px] h-[100px]">
                    {row.map((partner, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center ${index !== row.length - 1 ? 'mr-[40px]' : ''} ${row.length === 3 && index !== row.length - 1 ? 'lg:mr-[100px]' : ''}`}

                        >
                            <img
                                src={partner.image}
                                alt={`Partner ${index + 1}`}
                                className="lg:w-[200%] lg:h-[200%] max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
