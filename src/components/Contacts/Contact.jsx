import phone from "/src/assets/phone.svg"
import emailImg from "/src/assets/email.svg"
export default function Contact({ image, name, position, number, email }) {
    return (
        <li className=" border-2 border-customOrange contact mb-5 lg:mr-5 ">
            <div className=" flex flex-col items-center px-6 lg:px-[47px]">
                <img className=" object-cover w-full max-h-[283px] mb-[9.5px]" src={image} alt="" />
                <p className=" contact-name text-[24px] lg:text-[32px]  mb-[7.5px]">{name}</p>
                <p className=" contact-role text-[10px] lg:text-[14px] mb-[9.5px]">{position}</p>
                <div className=" w-full border-b-[1px] border-white mb-[12.5px]"></div>
                <div className="   flex items-center self-start mb-[14px]">
                    <img className="  mr-2" src={phone} alt="" />
                    <p>{number}</p>
                </div>
                <div className=" flex items-center self-start mb-[14px]">
                    <img className="mr-2" src={emailImg} alt="" />
                    <p>{email}</p>
                </div>
            </div>
        </li>
    );
}