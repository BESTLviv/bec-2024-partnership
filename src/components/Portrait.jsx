import Title from "./Title";
import { SPECIALITY } from "/src/data.js";
import portrait1 from '/src/assets/portrait1.png'
import portrait2 from '/src/assets/portrait2.png'
import Points from "./Points";
export default function Portrait() {
    return (
        <div className=" relative z-30 flex flex-col items-center relative text-white mx-[25px]  mb-[127px] lg:mb-[252px]">
            <div className="bg-ellipse w-[915px] h-[600px] left-[-30%] -top-[60%] absolute transform rotate-[-63.49deg] z-10  filter blur-[70px]"></div>
            <Title className=" text-center relative z-20 mb-20 mx-[65px] lg:mb-[64px]">ПОРТРЕТ УЧАСНИКА</Title>
            <div className="flex flex-col lg:flex-row lg:gap-[170px] lg:justify-center">
                <div>
                    <p className="text-[22px] font-daysOne leading-7 mb-[9px] lg:text-[36px]">Студент НУ “ЛП”</p>
                    <p className="text-[22px] font-daysOne mb-[13px] lg:text-[36px]">Вік: <span className=" text-[28px]">17-21</span> </p>
                    <p className="text-[20px] font-daysOne mb-[14px] lg:text-[36px]">Спеціальності:</p>
                    <Points data={SPECIALITY} className=" mb-[30px]"></Points>
                </div>

                <div className=" flex flex-col relative z-20  items-center mx-5">
                    <div className=" mb-5 lg:mb-[58px] relative w-[298px] h-[205px] lg:w-[473px] lg:h-[296px]">
                        <img className=" absolute object-cover h-full w-full" src={portrait1} alt="" />
                    </div>
                    <div className="relative w-[298px] h-[205px] lg:w-[473px] lg:h-[296px]">
                        <img className=" absolute object-cover h-full w-full" src={portrait2} alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
}
