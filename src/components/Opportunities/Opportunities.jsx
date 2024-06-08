import Title from "../Title";
import { OPPORTUNITIES } from "/src/data.js";
import Opportunity from "./Opportunity";
export default function Opportunities({ children, word }) {
    return (
        <div className=" relative p-[25px]">
            <div className="bg-ellipse w-[590px] h-[283px] left-[20%] -top-[40%] absolute transform rotate-[-63.49deg] z-10  filter blur-[70px]"></div>
            <Title className=" text-center p-[25px]">ДЛЯ КОМПАНІЇ BEC — ЦЕ МОЖЛИВІСТЬ</Title>
            <ol>
                {OPPORTUNITIES.map((opportunity, index) => <Opportunity key={index} data={opportunity}></Opportunity>)}
            </ol>
        </div>
    );
}