import Title from "./Title";
import { SOCIALS } from "../data";
export default function Statistics() {
    return (
        <div className="p-[50px] text-white mb-[160px]">
            <Title className="px-[20px]">СТАТИСТИКА ІВЕНТУ</Title>
            <div className="px-[45px] mb-[50px]">
                <p className=" mb-[50px] font-bold text-2xl">Статистика</p>
                <div className="h-[247px] w-[207px] border-solid border-2 border-white">
                    <ol className=" mx-[35px] my-[50px]">
                        {SOCIALS.map((social, index) => <li key={index}><div className=" mb-[30px] flex gap-[35px]"><img src={social.image} alt="" /><p className=" font-daysOne text-xl">{social.text}</p></div></li>)}
                    </ol>
                </div>
            </div>
            <div className=" h-[311.5px]  border-solid border-l-2 border-white flex flex-col text-[28px] font-bold">
                <div className="">
                    <p className="ml-5 mb-5">Заявки научасть:80</p>
                    <div className="h-[83px] w-full bg-custom-gradient"></div>
                </div>
                <div className="pb-[40px]">
                    <p className="ml-5 mb-5">Учасники: 44</p>
                    <div className="h-[83px] w-[65%] bg-custom-gradient"></div>
                </div>
            </div>
        </div>
    );
}