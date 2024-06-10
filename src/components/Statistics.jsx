import Title from "./Title";
import { SOCIALS } from "../data";
export default function Statistics() {
    return (
        <div className=" relative  p-[50px] text-white mb-[160px] lg:mb-[271px]">
            <div className="bg-ellipse w-[560px] h-[650px] -left-[75%] -top-[30%] absolute transform rotate-[-63.49deg] z-10  filter blur-[70px]"></div>
            <Title className=" relative z-20 text-center px-[20px]">СТАТИСТИКА ІВЕНТУ</Title>
            <div className=" flex flex-col items-center  lg:flex-row lg:justify-center lg:gap-[216px]">
                <div className=" relative z-20 px-[45px] mb-[50px] flex flex-col">
                    <p className="  mb-[50px] font-bold text-[24px] lg:text-[36px]">Статистика</p>
                    <div className="h-[247px] w-[207px] border-solid border-2 border-white lg:w-[320px] lg:h-[461px]">
                        <ol className=" mx-[35px] my-[50px] lg:mx-[56px] lg:my-[105px]">
                            {SOCIALS.map((social, index) => <li key={index}><div className=" mb-[30px] lg:mb-[35px] flex items-center gap-[35px]"><img className="lg:w-[60px] lg:h-[60px]" src={social.image} alt="" /><p className=" font-daysOne text-xl lg:text-[32px]">{social.text}</p></div></li>)}
                        </ol>
                    </div>
                </div>
                <div className=" ml-[23px] relative z-20 h-[311.5px] lg:w-[466px] lg:h-[461px] lg:mt-[100px]  border-solid border-l-2 border-white flex flex-col text-[20px] font-bold">
                    <div className="pb-[31px]">
                        <p className="ml-5 mb-[7px] lg:text-[28px]">Заявки на участь: <span className="text-[28px] lg:text-[36px]">80</span> </p>
                        <div className="h-[83px] lg:h-[113px] w-full bg-custom-gradient"></div>
                    </div>
                    <div className="mb-[37px]">
                        <p className="ml-5 mb-[4px] lg:text-[28px]">Учасники: <span className="text-[28px] lg:text-[36px]">44</span></p>
                        <div className="h-[83px] lg:h-[113px] w-[65%] bg-custom-gradient"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}