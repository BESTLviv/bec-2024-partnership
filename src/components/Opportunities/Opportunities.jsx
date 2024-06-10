import Title from "../Title";
import { OPPORTUNITIES } from "/src/data.js";
import Opportunity from "./Opportunity";
import { useState, useEffect } from 'react';
import aboutBec from "/src/assets/aboutBec.svg"
export default function Opportunities({ children, word }) {
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

    let content =
        <ol>
            {OPPORTUNITIES.map((opportunity, index) => <Opportunity isMobile={isMobile} key={index} data={opportunity}></Opportunity>)}
        </ol>
    if (!isMobile) {
        content =
            <div className="flex">
                <img className="bec-image py-5" src={aboutBec} alt="" />
                <ol className=" lg:pl-4 w-full lg:flex lg:flex-col lg:justify-center ">
                    {OPPORTUNITIES.map((opportunity, index) => <Opportunity key={index} data={opportunity}></Opportunity>)}
                </ol>
            </div>

    }
    return (
        <div id="opportunities" className=" relative p-[25px] lg:px-[140px]">
            <div className="bg-ellipse w-[590px] h-[283px] left-[20%] -top-[40%] absolute transform rotate-[-63.49deg] z-10  filter blur-[70px]"></div>
            <Title className=" text-center p-[25px]">ДЛЯ КОМПАНІЇ BEC — МОЖЛИВІСТЬ</Title>
            {content}
        </div>
    );
}