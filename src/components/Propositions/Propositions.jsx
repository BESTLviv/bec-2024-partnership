import React, { useState, useEffect } from 'react';
import Title from "../Title";
import { PROPOSITIONS, ADDITIONAL_PROPOSITIONS } from "/src/data.js";
import { Proposition, SubProposition } from "/src/components/Propositions/Proposition.jsx";

export default function Propositions({ addToBasket, handleRemoveProposition, selectedPropositions }) {
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

    let content = (
        <div className="mb-5 flex flex-col items-start w-full">
            {PROPOSITIONS.map((proposition, index) => (
                <Proposition key={index} {...proposition} addToBasket={addToBasket} isActive={selectedPropositions.some(element => element.title === proposition.title)} ></Proposition>
            ))}
        </div>
    );

    if (!isMobile) {
        content = (
            <div className="mb-5 flex flex-col items-start w-full">
                <div className="flex w-full lg:mb-[91px]">
                    <Proposition addToBasket={addToBasket} {...PROPOSITIONS[0]} isActive={selectedPropositions.some(element => element.title === PROPOSITIONS[0].title)}></Proposition>
                </div>
                <div className="flex w-full lg:gap-[37px] lg:mb-[91px]">
                    <Proposition addToBasket={addToBasket} {...PROPOSITIONS[1]} isActive={selectedPropositions.some(element => element.title === PROPOSITIONS[1].title)}></Proposition>
                    <Proposition addToBasket={addToBasket} {...PROPOSITIONS[2]} isActive={selectedPropositions.some(element => element.title === PROPOSITIONS[2].title)}></Proposition>
                </div>
                <div className="flex w-full lg:mb-[91px]">
                    <Proposition addToBasket={addToBasket} {...PROPOSITIONS[3]} isActive={selectedPropositions.some(element => element.title === PROPOSITIONS[3].title)}></Proposition>
                </div>
            </div>
        );
    }

    return (
        <>
            <div id="propositions" className="relative text-white mx-3 flex flex-col items-center mb-[150px] lg:mb-[250px] lg:mx-[72px]">
                <div className="bg-ellipse w-[564px] h-[652px] left-[10%] -top-[25%] absolute transform rotate-[-63.49deg] z-10 filter blur-[70px]"></div>
                <Title className=" text-center text-wrap mx-[57px] mb-[30px] lg:mb-[64px]">ПРОПОЗИЦІЇ</Title>
                {content}
                <div className=" self-start lg:self-start  lg:mx-0">
                    *10% отриманих коштів будуть передані на підтримку ЗСУ.<br />
                    *Оплата буде здійснюватись за курсом НБУ<br />
                    *Після завершення змагань кожна компанія–партнер отримає повну звітність з фотозвітом та aftermovie.
                </div>
            </div>
            <div className="text-white mx-[25px] flex flex-col items-center mb-[150px]">
                <Title className=" text-center mx-[50px] mb-[30px] lg:mb-[64px]">ДОДАТКОВІ ПРОПОЗИЦІЇ</Title>
                {ADDITIONAL_PROPOSITIONS.map((proposition, index) => (
                    <SubProposition key={index} {...proposition} addToBasket={addToBasket} handleRemoveProposition={handleRemoveProposition} isActive={selectedPropositions.some(element => element.title === proposition.text)}></SubProposition>
                ))}
            </div>
        </>
    );
}
