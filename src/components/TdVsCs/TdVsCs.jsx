import Title from "../Title";
import Subject from "./Subject";
import { SUBJECTS } from "/src/data.js";
export default function TdVsCs() {
    return (
        <div className=" text-white mb-[60px] px-[50px] ">
            <Title>CASE STUDY VS TEAM DESIGN</Title>
            <div className="bg-orange-400 p-5 flex-row">
                {SUBJECTS.map((item, index) => <Subject key={index} subject={item}></Subject>)}
            </div>

        </div>
    );
}