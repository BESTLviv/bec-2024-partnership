import Title from "../Title";
import { SPECIALITY } from "/src/data.js";
import Points from "../Points";
import info from "/src/assets/info.svg"

export function Proposition({ title, points, subInfo, price }) {
    return (
        <div className=" relative flex flex-col text-white w-[347px] h-[454px] px-5 bg-proposition-gradient hover:border-solid hover:border-2 hover:border-propositionBorder p-5 mb-10 text-[12px] font-medium">
            <button className=" w-5 h-5 border-solid border-[3px] border-white rounded-full text-white flex justify-center items-center self-end">i</button>
            <p className=" text-[24px] font-daysOne uppercase mb-[12px]">{title}</p>
            <Points data={points}></Points>
            <div className=" absolute transform -translate-y-[125%] bottom-0  inline-block w-auto border-solid border-[1px] border-customGray text-customGray text-[12px] p-[10px]">{subInfo}</div>
            <button className=" box-border hover:border-propositionBorder text-[24px] absolute left-1/2 bg-proposition-button transform translate-y-1/2 -translate-x-1/2 bottom-0 w-[112px] h-[42px] border-solid border-2 border-white flex justify-center items-center">{price}</button>
        </div>
    );
}


export function SubProposition({ text, price }) {
    return (
        <div className="  relative flex items-center justify-center text-white w-[340px] p-[15px] bg-proposition-gradient hover:border-solid hover:border-2 hover:border-propositionBorder mb-[10px] text-[14px]">
            <div className="flex items-center self-start transform translate-y-[6px]">
                <input
                    type="checkbox"
                    id=""
                    className=" mr-[12px]  custom-checkbox rounded-none appearance-none h-[15px] w-[15px] border-[2px] border-white checked:bg-checked  focus:outline-none"
                />
            </div>
            <div className="flex-grow">
                <p className=" break-words w-[150px] ">{text}</p>
            </div>
            <button className=" box-border hover:border-propositionBorder text-[14px] relative  bg-proposition-button  w-[52px] h-[24px]  flex justify-center items-center self-center mr-3">{price}</button>
            <button className=" w-5 h-5 border-solid border-[3px] border-white rounded-full text-white flex justify-center items-center ">i</button>

        </div>
    );
}
