import React, { useState, useEffect } from 'react';
import Title from "../Title";
import { PROPOSITIONS, ADDITIONAL_PROPOSITIONS } from "/src/data.js";
import { Proposition, SubProposition } from "/src/components/Propositions/Proposition.jsx";

export default function Propositions({ innerRef, addToBasket, handleRemoveProposition, selectedPropositions, isMobile }) {

    let content = (
        <div className=" relative z-30 mb-5 px-[25px] flex flex-col items-start w-full">
            {PROPOSITIONS.map((proposition, index) => (
                <Proposition key={index} {...proposition} addToBasket={addToBasket} isActive={selectedPropositions.some(element => element.title === proposition.title)} ></Proposition>
            ))}
        </div>
    );

    let elipse = <div className="bg-ellipse w-[564px] h-[652px] left-[60%] top-[-30%] absolute scale-[1.2] transform rotate-[-63.49deg] z-10 filter blur-[70px]"></div>
    let lines = ""




    if (!isMobile) {
        lines = <div className="absolute bg-lines2  bg-no-repeat w-[2300px] h-[1500px] z-10s  left-[-5%] transform  top-[112%]"></div>
        content = (
            <div className="relative z-30 mb-5 flex flex-col items-start w-full">
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

        elipse = <div className="bg-ellipse w-[564px] h-[652px] left-[-30%] top-[10%] absolute scale-[2] transform rotate-[-63.49deg] z-10 filter blur-[70px]"></div>
    }

    return (
        <div ref={innerRef}>

            <div id="propositions" className="propositions relative  text-white mx-3 flex flex-col items-center lg:mx-[72px]">
                {lines}
                {elipse}
                <Title className=" relative z-30 propositions__title text-center text-wrap mx-[57px] mb-[30px] lg:mb-[64px]">ПРОПОЗИЦІЇ</Title>
                {content}
                <div className=" relative px-[25px] lg:px-0 z-30 self-start lg:self-start  lg:mx-0">
                    *10% отриманих коштів будуть передані на підтримку ЗСУ.<br />
                    *Оплата буде здійснюватись за курсом НБУ<br />
                    *Після завершення змагань кожна компанія–партнер отримає повну звітність з фотозвітом та aftermovie.
                </div>
            </div>
            <div className="sub-propositions text-white mx-[25px] flex flex-col relative z-30 items-center mb-[150px]">

                <Title className="sub-propositions__title text-center mx-[50px] mb-[30px] lg:mb-[64px]">ДОДАТКОВІ ПРОПОЗИЦІЇ</Title>
                {ADDITIONAL_PROPOSITIONS.map((proposition, index) => (
                    <SubProposition isMobile={isMobile} key={index} {...proposition} addToBasket={addToBasket} handleRemoveProposition={handleRemoveProposition} isActive={selectedPropositions.some(element => element.title === proposition.text)}></SubProposition>
                ))}
            </div>
        </div>
    );
}
