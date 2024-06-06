import Title from "./Title";
import Slider from "./PhotoSlider";
import Description from "./Description";
import WhatBec from "./WhatBec";
import TdVsCs from "./TdVsCs/TdVsCs";
export default function Content() {
    return (
        <div className="flex flex-col bg-black px-[50px] pt-[160px]">
            <WhatBec></WhatBec>
            <Slider ></Slider>
            <TdVsCs></TdVsCs>
        </div>
    );
}