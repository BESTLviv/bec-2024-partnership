import React from 'react';
import Title from './Title';
import { PARTNERS } from '/src/data.js';

export default function Partners() {
    const chunkArray = (array, sizes) => {
        let index = 0;
        return sizes.map(size => {
            const chunk = array.slice(index, index + size);
            index += size;
            return chunk;
        });
    };

    const rowSizes = [2, 2, 3, 2, 2, 2];
    const chunkedPartners = chunkArray(PARTNERS, rowSizes);
    console.log(chunkedPartners)

    return (
        <div className="text-white px-[15px] mb-[150px]">
            <Title className="mb-[35px]">НАС ПІДТРИМУЮТЬ</Title>
            {chunkedPartners.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center  mb-10">
                    {row.map((partner, index) => (
                        <div key={index} className={`flex items-center justify-center ${row.length === 3 ? 'mr-[50px]' : 'mr-[40px]'}  ${index === row.length - 1 ? 'mr-0' : ''}`}>
                            <img src={partner.image} alt={`Partner ${index + 1}`} className="max-w-full max-h-full object-contain" />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
