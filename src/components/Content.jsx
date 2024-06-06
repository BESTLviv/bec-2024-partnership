import Title from "./Title";
import Slider from "./PhotoSlider";
import Description from "./Description";
import WhatBec from "./WhatBec";
import TdVsCs from "./TdVsCs/TdVsCs";
import Opportunities from "./Opportunities/Opportunities";
import Statistics from "./Statistics";
export default function Content() {
    return (
        <div className="flex flex-col bg-black  pt-[160px]">
            <WhatBec></WhatBec>
            <Slider ></Slider>
            <TdVsCs></TdVsCs>
            <Opportunities></Opportunities>
            <Statistics></Statistics>
        </div>
    );
}