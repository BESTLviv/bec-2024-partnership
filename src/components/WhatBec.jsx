import Title from "./Title";
import Description from "./Description";
import ellipse from "/src/assets/ellipse.svg"

export default function WhatBec() {

    return (
        <div className=" flex flex-col lg:items-center self-center relative text-white mb-[165px] px-[50px] pt-[160px] lg:pt-[250px]  mb-[165px] lg:mb-[250px] ">

            <div className="bg-ellipse w-[416px] h-[413px] left-[-60%] transform rotate-[48.74deg] top-[-13%] absolute  z-10  filter blur-[70px] lg:opacity-0"> </div>
            <div className="absolute bg-linerrr bg-contain w-[3000px] h-[1440.22px] z-10 bg-no-repeat left-[-40%] top-[0%] "></div>
            <div className="absolute bg-ellipse-black w-[1700.39px] rounded-full h-[460.22px] left-[-90%] top-[-30%] z-20 filter blur-[70px]"></div>
            <div className="absolute bg-ellipse-black w-[1700.39px] rounded-full h-[674.22px] left-[40%] top-[-100%] z-20 filter blur-[70px] transform rotate-[-26.56deg]"></div>
            <Title className="relative z-20 text-left lg:text-center lg:mb-[54px]">ЩО ТАКЕ BEC?</Title>
            <div className="  relative z-20 lg:w-[724px] lg:text-center">
                <p className="  leading-[150%] mb-[10px]">Це змагання, що запрошують молодих інженерів застосувати свої знання та навички для вирішення реальних завдань в одній з двох категорій
                    — Case Study (CS) та Team Design (TD).</p>
                <p className="  leading-[150%] "></p>
                <p className="  leading-[150%]  mb-[24px]">Учасниками змагань є студенти, що зацікавлені у розв'язанні сучасних проблем та створенні інноваційних проєктів. Мета події — підвищення інтересу молоді до майбутнього розвитку інженерного напрямку. Це підніме рівень обізнаності галуззю та забезпечить наявність висококваліфікованих спеціалістів в Україні.</p>
            </div>

            <button className="block border-2  border-customOrange text-white py-[10px] w-full h-[46px] text-[16px] lg:w-[359px]">Дізнатись більше</button>
        </div>
    );
}