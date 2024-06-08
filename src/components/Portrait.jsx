import Title from "./Title";
import { SPECIALITY } from "/src/data.js";
import portrait1 from '/src/assets/portrait1.png'
import portrait2 from '/src/assets/portrait2.png'
import Points from "./Points";
export default function Portrait() {
    return (
        <div className="text-white mx-[25px] mb-[127px]">
            <Title className="mb-20 mx-[65px] font-daysOne">ПОРТРЕТ УЧАСНИКА</Title>
            <p className="text-[22px] leading-7 mb-[9px]">Студент</p>
            <p className="text-[28px] mb-[13px]">Вік: 17-21</p>
            <p className="text-[28px] mb-[14px]">Спеціальності:</p>
            <Points data={SPECIALITY} className=" mb-[60px]"></Points>
            <div className=" flex flex-col  items-center mx-5">
                <div className=" mb-5 relative w-[298px] h-[205px] ">
                    <img className=" absolute object-cover h-full w-full" src={portrait1} alt="" />
                </div>
                <div className="relative w-[298px] h-[205px]">
                    <img className=" absolute object-cover h-full w-full" src={portrait2} alt="" />
                </div>

            </div>




        </div>
    );
}
