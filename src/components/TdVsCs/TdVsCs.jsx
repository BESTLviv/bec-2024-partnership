import Title from "../Title";
import Subject from "./Subject";
import { SUBJECTS } from "/src/data.js";
export default function TdVsCs() {
    return (
        <div className=" bg-black  relative text-white mb-[60px] px-[50px] lg:flex lg:flex-col lg:items-center lg:mb-[160px]">
            {/* <div className=" absolute z-30 bg-lines w-[2770px] h-[2400px] -left-[1300px] transform rotate-[-27.55deg]"> */}
            {/* <img className=" absolute z-30  w-[2000px] h-[2000px] transform rotate-[-27.55deg]  -top-20 -left-[200px]" src="/src/assets/lines.svg" alt="" /> */}
            {/* </div> */}

            <Title className="text-center">CASE STUDY VS TEAM DESIGN</Title>
            <div className=" bg-black p-5 lg:flex relative z-30 lg:gap-[196px]   ">
                {SUBJECTS.map((item, index) => <Subject key={index} subject={item} isLast={index === SUBJECTS.length - 1}></Subject>)}
            </div>

        </div>
    );
}