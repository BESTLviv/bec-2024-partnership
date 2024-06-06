import Title from "./Title";
import Description from "./Description";
export default function WhatBec() {
    return (
        <div className=" text-white mb-[60px]">
            <Title>ЩО ТАКЕ BEC?</Title>
            <Description className="mb-[30px]">Це змагання, що запрошують молодих інженерів застосувати свої знання та навички для вирішення реальних завдань в одній з двох категорій
                — Case Study (CS) та Team Design (TD).</Description>
            <button className="block bg-customOrange text-black py-[10px] w-full h-[46px]   text-[16px]">Дізнатися більше</button>
        </div>
    );
}