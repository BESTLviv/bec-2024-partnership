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
        return sizes.map((size) => {
            const chunk = array.slice(index, index + size);
            index += size;
            return chunk;
        });
    };

    const rowSizes = isMobile ? [2, 2, 2, 2, 2, 2] : [2, 4, 4, 2];
    const chunkedPartners = chunkArray(PARTNERS, rowSizes);
    console.log(chunkedPartners);
    let marginRight = "mr-[36px]"
    if (!isMobile) {
        marginRight = "mr-[66px]"
    }
    return (
        <div className="partners text-white px-[15px]">
            <Title className="partners__title text-center px-[40px]">НАС ПІДТРИМУЮТЬ</Title>
            {chunkedPartners.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center partners__row ">
                    {row.map((partner, index) => (
                        <div
                            key={index}
                            className={`flex items-center   justify-center ${index !== row.length - 1 ? marginRight : ''
                                } ${row.length === 3 && index !== row.length - 1 ? 'lg:mr-[46px]' : ''}`}
                        >
                            <img
                                src={partner.image}
                                alt={`Partner ${index + 1}`}
                                className="lg:w-[130%] lg:h-[130%] object-contain"
                                // Additional styles for increased image size
                                style={{ maxWidth: '200px', maxHeight: '200px' }}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
