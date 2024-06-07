import Title from "../Title";
import { SPECIALITY } from "/src/data.js";
import Points from "../Points";

export default function Proposition({ title, points, subInfo, price }) {
    return (
        <div className="text-white w-[347px] h-[454px] mx-5 bg-proposition-gradient hover:border-solid hover:border-2 hover:border-r-orange-500 p-5 mb-10">
            <p className=" text-[24px] font-daysOne   mb-[12px]">{title}</p>
            <Points data={points}></Points>
        </div>
    );
}
