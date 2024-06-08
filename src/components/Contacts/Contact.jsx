import phone from "/src/assets/phone.svg"
import emailImg from "/src/assets/email.svg"
export default function Contact({ image, name, position, number, email }) {
    return (
        <li className=" border-2 border-customOrange">
            <div className=" flex flex-col items-center px-6">
                <img className=" object-cover w-full max-h-[283px] mb-[9.5px]" src={image} alt="" />
                <p className=" text-[24px] mb-[7.5px]">{name}</p>
                <p className=" text-[10px] mb-[9.5px]">{position}</p>
                <div className=" w-full border-b-[1px] border-white mb-[12.5px]"></div>
                <div className="  flex items-center self-start mb-[14px]">
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