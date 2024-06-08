import Title from "../Title";
import { CONTACTS } from "/src/data.js";
import Contact from "./Contact";
export default function Contacts() {
    return (
        <div className=" flex flex-col relative text-white px-[54px] mb-[53px]   ">
            <Title className=" px-[40px] mb-[25px]">КОНТАКТИ</Title>
            <ol>
                {CONTACTS.map((contact, index) => <Contact key={index} {...contact}></Contact>)}
            </ol>
        </div>
    );
}