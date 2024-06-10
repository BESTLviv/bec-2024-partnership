import React, { useState } from 'react';
import Title from "./Title";
import PhotoSlider from "./PhotoSlider";
import Description from "./Description";
import WhatBec from "./WhatBec";
import TdVsCs from "./TdVsCs/TdVsCs";
import Opportunities from "./Opportunities/Opportunities";
import Statistics from "./Statistics";
import Portrait from "./Portrait";
import Propositions from "./Propositions/Propositions";
import Basket from "./Basket/Basket";
import Partners from "./Partners";
import Aboutbest from "./AboutBest";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer";
import { Proposition } from './Propositions/Proposition';

export default function Content() {
    const [selectedPropositions, setSelectedPropositions] = useState([{ title: "Solid Base", price: 350, isSub: false }]);

    const addToBasket = (title, price, isSub) => {
        setSelectedPropositions(propositions => {
            for (const proposition of propositions) {
                if (proposition.title == title) {
                    return propositions
                }
            }
            return [...propositions, { title, price, isSub }]
        });
    };
    const handleRemoveProposition = (name) => {
        setSelectedPropositions(propositions => {
            const newPropositions = [...propositions]; // Створюємо копію масиву
            const index = newPropositions.findIndex(proposition => proposition.title === name); // Знаходимо індекс пропозиції
            if (index !== -1) {
                newPropositions.splice(index, 1); // Видаляємо пропозицію, якщо вона знайдена
            }
            return newPropositions;
        });
    };


    return (
        <div className="flex flex-col overflow-hidden bg-black">
            <WhatBec />

            <TdVsCs />
            <Opportunities />
            <Statistics />
            <Portrait />
            <Propositions selectedPropositions={selectedPropositions} addToBasket={addToBasket} handleRemoveProposition={handleRemoveProposition} />
            <Basket selectedPropositions={selectedPropositions} handleRemoveProposition={handleRemoveProposition} />
            <Partners />
            <Aboutbest />
            <Contacts />
            <Footer />
        </div>
    );
}
