import Title from "./Title";
import { SOCIALS } from "../data";
export default function Statistics() {
    return (
        <div className=" relative  p-[50px] text-white mb-[160px]">
            <div className="bg-ellipse w-[560px] h-[650px] -left-[75%] -top-[30%] absolute transform rotate-[-63.49deg] z-10  filter blur-[70px]"></div>
            <Title className=" relative z-20 text-center px-[20px]">СТАТИСТИКА ІВЕНТУ</Title>
            <div className=" relative z-20 px-[45px] mb-[50px] flex flex-col">
                <p className="  mb-[50px] font-bold text-[24px]">Статистика</p>
                <div className="h-[247px] w-[207px] border-solid border-2 border-white">
                    <ol className=" mx-[35px] my-[50px]">
                        {SOCIALS.map((social, index) => <li key={index}><div className=" mb-[30px] flex gap-[35px]"><img src={social.image} alt="" /><p className=" font-daysOne text-xl">{social.text}</p></div></li>)}
                    </ol>
                </div>
            </div>
            <div className=" relative z-20 h-[311.5px]  border-solid border-l-2 border-white flex flex-col text-[20px] font-bold">
                <div className="pb-[31px]">
                    <p className="ml-5 mb-[7px]">Заявки на участь: <span className="text-[28px]">80</span> </p>
                    <div className="h-[83px] w-full bg-custom-gradient"></div>
                </div>
                <div className="mb-[37px]">
                    <p className="ml-5 mb-[4px]">Учасники: <span className="text-[28px]">44</span></p>
                    <div className="h-[83px] w-[65%] bg-custom-gradient"></div>
                </div>
            </div>
        </div>
    );
}