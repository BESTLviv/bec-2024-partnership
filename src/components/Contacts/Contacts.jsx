import Title from "../Title";
import { CONTACTS } from "/src/data.js";
import Contact from "./Contact";
export default function Contacts({ innerRef }) {
    return (
        <div ref={innerRef} className="contacts flex flex-col relative text-white px-[54px] lg:px-[105px]">
            <Title className="contacts__title text-center lg:text-center px-[40px]">КОНТАКТИ</Title>
            <ol className=" flex flex-col 3xl:flex-row 3xl:justify-between items-center 3xl:items-start">
                {CONTACTS.map((contact, index) => <Contact key={index} {...contact}></Contact>)}
            </ol>
        </div>
    );
} 