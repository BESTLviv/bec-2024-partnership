import imgFullScreen from "../assets/full-screen.png"
import lgFullScreen from "../assets/lgFull.png"
import girl from "../assets/girl.png"
import logo from "../assets/BEC Logo Final.svg"
import Header from "./Header.jsx"
import { useState, useEffect } from 'react';
export default function FullScreen() {

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

    let menu = <div className="flex flex-col items-center space-y-[5px] ">
        <span className="block w-7 h-[3px] bg-white"></span>
        <span className="block w-7 h-[3px] bg-white"></span>
        <span className="block w-7 h-[3px] bg-white"></span>
    </div>
    let fullScreen = <img className=" absolute inset-0 -z-10 object-cover h-full w-full" src={imgFullScreen} alt="" />


    if (!isMobile) {
        menu =
            <div className="flex flex-row items-center justify-between text-white  ">
                <button className=" transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] full-input ">Про нас</button>
                <button className=" transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] full-input  ">Пропозиції</button>
                <button className=" transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] full-input ">Статистика</button>
                <button className=" transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] full-input  ">Контакти</button>
            </div>

        fullScreen =
            <>
                <div className=" background-fill absolute  right-0 -z-10 object-cover h-full w-[57.2%]" />
                <img className=" background-fill absolute  right-0 -z-20 object-cover h-full w-[57.2%]" src={lgFullScreen} alt="" />
                <img className=" bg-lgFull absolute  bottom-0 -right-[19%] -z-10 object-contain h-[67.4%] w-full" src={girl} alt="" />
            </>
        // <div className=" bg-lg-full-screen absolute  right-0 -z-10 object-contain h-[400px] w-[400px]" alt="" />
        //     <div className=" bg-girl absolute  right-0 bottom-0 -z-10 object-cover h-full" alt="" />
    }

    return (
        <div id="full-screen" className=" relative z-40 flex flex-col bg-black h-screen overflow-hidden ">
            {fullScreen}
            <div id="header" className="relative flex items-center justify-between lg:justify-normal lg:items-normal w-full px-[25px] lg:px-[50px] lg:py-[37px] py-[20px] bg-black bg-opacity-10 ">
                <div className=" lg:mr-[132px] shrink-0 grow-0">
                    <img className=" " src={logo} alt="Logo" />
                </div>
                {menu}
            </div>

            <div id="info" className="  flex-grow flex flex-col justify-center  mx-[50px] mb-[40px] text-white">
                <h2 className=" text-white text-header font-daysOne mb-[18px]">BEST Engineering Competition</h2>
                <h3 className=" text-white font-jura leading-[33px] text-[28px]">25-29 жовтня</h3>
                <button style={{ fontSize: 'calc(16px + 4 * (100vw - 320px) / 1120)' }} className="transition-transform transform-gpu duration-[400ms] hover:scale-[1.1]  block font-workSans bg-customOrange text-black p-[10px]  ">Стати партнером</button>
            </div>
        </div>
    )
}