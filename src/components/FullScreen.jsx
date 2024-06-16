import imgFullScreen from "../assets/full-screen.png";
import lgFullScreen from "../assets/lgFull.png";
import girl from "../assets/girl.png";
import logo from "../assets/BEC Logo Final.svg";
import Header from "./Header.jsx";
import { useState, useEffect } from 'react';

export default function FullScreen({ propositionsRef, whatBecRef, statisticsRef, contactsRef }) {
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

    const handleScrollToPropositions = () => {
        if (propositionsRef.current) {
            propositionsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToWhatBec = () => {
        if (whatBecRef.current) {
            whatBecRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToStatistics = () => {
        if (statisticsRef.current) {
            statisticsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToContacts = () => {
        if (contactsRef.current) {
            contactsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    let menu = (
        <div className="flex flex-col items-center space-y-[5px] ">
            <span className="block w-7 h-[3px] bg-white"></span>
            <span className="block w-7 h-[3px] bg-white"></span>
            <span className="block w-7 h-[3px] bg-white"></span>
        </div>
    );

    let fullScreen = <img className=" absolute inset-0 -z-10 object-cover h-full w-full" src={imgFullScreen} alt="" />;

    if (!isMobile) {
        menu = (
            <div className="flex flex-row items-center justify-between text-white">
                <button onClick={handleScrollToWhatBec} className=" pointer-events-auto transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] full-input">Про нас</button>
                <button onClick={handleScrollToPropositions} className=" transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] full-input">Пропозиції</button>
                <button onClick={handleScrollToStatistics} className=" transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] full-input">Статистика</button>
                <button onClick={handleScrollToContacts} className=" transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] full-input">Контакти</button>
            </div>
        );

        fullScreen = (
            <>
                <div className=" background-fill absolute  right-0 -z-10 object-cover h-full w-[57.2%]" />
                <img className=" background-fill absolute  right-0 -z-20 object-cover h-full w-[57.2%]" src={lgFullScreen} alt="" />
                <img className=" bg-lgFull absolute  bottom-0 -right-[19%] -z-10 object-contain h-[67.4%] w-full" src={girl} alt="" />
            </>
        );
    }

    return (
        <div id="full-screen" className=" mb-[160px] lg:mb-[250px] relative z-40 flex flex-col bg-black h-screen overflow-hidden">
            {fullScreen}
            <div id="header" className=" fixed z-50 filter backdrop-blur-sm top-0 flex items-center justify-between lg:justify-normal lg:items-normal w-full px-[25px] lg:px-[50px]  py-[20px] bg-black bg-opacity-10">
                <div className="lg:mr-[132px] shrink-0 grow-0">
                    <img className="" src={logo} alt="Logo" />
                </div>
                {menu}
            </div>
            <div></div>
            <div id="info" className=" relative top-1/2 transform translate-y-[-50%] flex-grow flex flex-col justify-center  mx-[50px] mb-[40px] text-white">
                <h2 className="text-white text-header font-daysOne mb-[18px]">BEST Engineering Competition</h2>
                <h3 className="text-white font-jura leading-[33px] text-[28px]">25-29 жовтня</h3>
                <button onClick={handleScrollToPropositions} style={{ fontSize: 'calc(16px + 4 * (100vw - 320px) / 1120)' }} className="transition-transform transform-gpu duration-[400ms] hover:scale-[1.1] block font-workSans bg-customOrange text-black p-[10px]">Стати партнером</button>
            </div>
        </div>
    );
}
