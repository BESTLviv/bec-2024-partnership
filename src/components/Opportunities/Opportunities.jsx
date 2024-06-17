import Title from "../Title";
import { OPPORTUNITIES } from "/src/data.js";
import Opportunity from "./Opportunity";
import { useState, useEffect } from 'react';
import aboutBec from "/src/assets/aboutBec.svg"
export default function Opportunities({ isMobile, children, word }) {

    let content =
        <ol>
            {OPPORTUNITIES.map((opportunity, index) => <Opportunity isMobile={isMobile} key={index} data={opportunity}></Opportunity>)}
        </ol>

    let elipse = <div className="bg-ellipse w-[590px] h-[283px] left-[60%] -top-[50%] absolute transform rotate-[-63.49deg] z-10  filter blur-[70px]"></div>
    if (!isMobile) {
        content =
            <div className="flex">
                <img className="bec-image py-5" src={aboutBec} alt="" />
                <ol className=" lg:pl-4 w-full lg:flex lg:flex-col lg:justify-center ">
                    {OPPORTUNITIES.map((opportunity, index) => <Opportunity key={index} data={opportunity}></Opportunity>)}
                </ol>
            </div>
        elipse = <div className="bg-ellipse w-[590px] h-[283px] left-[20%] top-[45%] scale-[1.8] absolute transform rotate-[-63.49deg] z-10  filter blur-[70px]"></div>
    }
    return (
        <div id="opportunities" className=" relative px-[25px] lg:px-[140px]">
            {elipse}
            <Title className="opportunities__title text-center px-[25px]">ДЛЯ КОМПАНІЇ BEC — МОЖЛИВІСТЬ</Title>
            {content}
        </div>
    );
}