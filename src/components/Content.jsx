import Title from "./Title";
import Slider from "./PhotoSlider";
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
export default function Content() {
    return (
        <div className="flex flex-col bg-black  pt-[160px]">
            <WhatBec></WhatBec>
            <Slider ></Slider>
            <TdVsCs></TdVsCs>
            <Opportunities></Opportunities>
            <Statistics></Statistics>
            <Portrait></Portrait>
            <Propositions></Propositions>
            <Basket></Basket>
            <Partners></Partners>
            <Aboutbest></Aboutbest>
            <Contacts></Contacts>
        </div>
    );
}