import Title from "../Title";
import { PROPOSITIONS, ADDITIONAL_PROPOSITIONS } from "/src/data.js";
import { Proposition, SubProposition } from "./Proposition";

export default function Propositions() {
    return (
        <>
            <div className="text-white mx-5 flex flex-col items-center mb-[150px]">
                <Title className=" mx-[57px] mb-[30px]">ПРОПОЗИЦІЇ</Title>
                <div className=" mb-5 flex flex-col items-start w-[347px] ">
                    {PROPOSITIONS.map((proposition, index) => <Proposition key={index} {...proposition}></Proposition>)}
                </div>
                <div className="mx-[25px] text-[12px]">*10% отриманих коштів будуть передані на підтримку ЗСУ.<br />*Оплата буде здійснюватись за курсом НБУ<br />*Після завершення змагань кожна компанія–партнер отримає повну звітність з фотозвітом та aftermovie.</div>
            </div>
            <div className="text-white mx-[25px] flex flex-col items-center mb-[150px]">
                <Title className=" mx-[50px] mb-[30px]">ДОДАТКОВІ ПРОПОЗИЦІЇ</Title>
                {ADDITIONAL_PROPOSITIONS.map((proposition, index) => <SubProposition key={index} {...proposition}></SubProposition>)}
            </div>
        </>
    );
}
