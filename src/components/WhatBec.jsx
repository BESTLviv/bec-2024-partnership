import Title from "./Title";
import Description from "./Description";
import ellipse from "/src/assets/ellipse.svg"
export default function WhatBec() {
    return (
        <div className=" relative text-white mb-[60px] px-[50px]">
            <div className="bg-ellipse w-[416px] h-[413px] left-[-65%] transform rotate-[48.74deg] top-[-45%] absolute  z-10  filter blur-[70px]"> </div>

            <Title className="relative z-20 text-left">ЩО ТАКЕ BEC?</Title>
            <div className=" relative z-20">
                <p className="  leading-[150%] mb-[10px]">Це змагання, що запрошують молодих інженерів застосувати свої знання та навички для вирішення реальних завдань в одній з двох категорій
                    — Case Study (CS) та Team Design (TD).</p>
                <p className="  leading-[150%] ">Учасниками змагань є студенти, що зацікавлені у розв'язанні сучасних проблем та створенні інноваційних проєктів.</p>
                <p className="  leading-[150%]  mb-[24px]">Мета події — підвищення інтересу молоді до майбутнього розвитку інженерного напрямку. Це підніме рівень обізнаності галуззю та забезпечить наявність висококваліфікованих спеціалістів в Україні.</p>
            </div>

            <button className="block border-2 border-customOrange text-white py-[10px] w-full h-[46px]   text-[16px]">Дізнатись більше</button>
        </div>
    );
}