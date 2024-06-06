import Title from "./Title";
import { SOCIALS } from "../data";
export default function Statistics() {
    return (
        <div className="p-[50px] text-white">
            <Title className="px-[20px]">СТАТИСТИКА ІВЕНТУ</Title>
            <div className="px-[45px]">
                <p className=" mb-[50px] font-bold text-2xl">Статистика</p>
                <div className="h-[247px] w-[207px] border-solid border-2 border-white">
                    <ol className=" mx-[35px] my-[50px]">
                        {SOCIALS.map((social, index) => <li key={index}><div className=" mb-[30px] flex gap-[35px]"><img src={social.image} alt="" /><p className=" font-daysOne text-xl">{social.text}</p></div></li>)}
                    </ol>
                </div>
            </div>
            <div></div>
        </div>
    );
}