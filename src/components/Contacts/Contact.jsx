import phone from "/src/assets/phone.svg"
import emailImg from "/src/assets/email.svg"
export default function Contact({ image, name, position, number, email }) {
    return (
        <li className=" border-2 border-customOrange contact2 contact1 contact1  mb-5 lg:mb-0">
            <div className=" flex flex-col h-full items-center px-6 lg:px-[30px]">
                <img className="contact-image object-cover w-full max-h-[283px]" src={image} alt="" />
                <div className=" flex-1">
                    <p className=" contact-name ">{name}</p>
                    <p className="  contact-role ">{position}</p>
                </div>

                <div className="  contact-border w-full border-b-[1px] border-white"></div>
                <div className=" contact-info   flex items-center self-start mb-[10px]">
                    <img className="mr-2" src={phone} alt="" />
                    <p>{number}</p>
                </div>
                <div className=" contact-info h-5 flex items-center self-start mb-[24px]">
                    <img className="mr-2" src={emailImg} alt="" />
                    <p>{email}</p>
                </div>
            </div>
        </li>
    );
}