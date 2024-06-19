import Title from "../Title";
import { CONTACTS } from "/src/data.js";
import Contact from "./Contact";
export default function Contacts({ innerRef }) {
    return (
        <div ref={innerRef} className="contacts flex flex-col relative text-white ">
            <Title className="contacts__title text-center lg:text-center px-[40px]">КОНТАКТИ</Title>
            <ol className=" flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
                {CONTACTS.map((contact, index) => <Contact key={index} {...contact}></Contact>)}
            </ol>
        </div>
    );
} 