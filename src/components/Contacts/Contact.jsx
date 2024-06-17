import phone from "/src/assets/phone.svg"
import emailImg from "/src/assets/email.svg"
export default function Contact({ image, name, position, number, email }) {
    return (
        <li className=" border-2 border-customOrange contact mb-5">
            <div className=" flex flex-col items-center px-6 3xl:px-[47px]">
                <img className="contact-image object-cover w-full max-h-[283px]" src={image} alt="" />
                <p className=" contact-name text-[24px]">{name}</p>
                <p className=" contact-role text-[10px]">{position}</p>
                <div className="contact-border w-full border-b-[1px] border-white"></div>
                <div className="contact-info  flex items-center self-start mb-[10px]">
                    <img className="mr-2" src={phone} alt="" />
                    <p>{number}</p>
                </div>
                <div className=" contact-info flex items-center self-start mb-[24px]">
                    <img className="mr-2" src={emailImg} alt="" />
                    <p>{email}</p>
                </div>
            </div>
        </li>
    );
}