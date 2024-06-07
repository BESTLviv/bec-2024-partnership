import Title from "../Title";
import { PROPOSITIONS } from "/src/data.js";
import Proposition from "./Proposition";
export default function Propositions() {
    return (
        <div className="text-white mx-5 ">
            <Title className=" mx-[57px] mb-[30px]">ПРОПОЗИЦІЇ</Title>
            <div className=" flex flex-col ">
                {PROPOSITIONS.map((proposition, index) => <Proposition key={index} {...proposition}></Proposition>)}
            </div>
        </div>
    );
}
