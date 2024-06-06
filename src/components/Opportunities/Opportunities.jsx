import Title from "../Title";
import { OPPORTUNITIES } from "/src/data.js";
import Opportunity from "./Opportunity";
export default function Opportunities({ children, word }) {
    return (
        <div className="p-[25px]">
            <Title className="p-[25px]">ДЛЯ КОМПАНІЇ BEC — ЦЕ МОЖЛИВІСТЬ</Title>
            <ol>
                {OPPORTUNITIES.map((opportunity, index) => <Opportunity key={index} data={opportunity}></Opportunity>)}
            </ol>
        </div>
    );
}