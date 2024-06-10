import Title from "../Title";
import { CONTACTS } from "/src/data.js";
import Contact from "./Contact";
export default function Contacts() {
    return (
        <div className=" flex flex-col relative text-white px-[54px] lg:px-[105px] mb-[54px] lg:mb-[140px] ">
            <Title className=" text-center lg:text-center px-[40px] mb-[25px]">КОНТАКТИ</Title>
            <ol className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-center">
                {CONTACTS.map((contact, index) => <Contact key={index} {...contact}></Contact>)}
            </ol>
        </div>
    );
} 