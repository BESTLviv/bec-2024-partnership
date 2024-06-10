import BestLviv from "/src/assets/BestLviv.svg"
import instagram from "/src/assets/instagram.svg"
import telegram from "/src/assets/telegram.svg"
import linkedin from "/src/assets/linkedin.svg"
export default function Footer() {
    return (
        <div className=" relative justify-between  h-6 bg-black flex text-white px-[34px] lg:px-[105px] mb-[10px]   ">
            <p className=" text-[16px] lg:text-[20px] font-daysOne ">2024</p>
            <img className=" w-12 transform lg:h-[150%] lg:w-[150%] " src={BestLviv} alt="" />
            <div className="flex    w-12 ">
                <img className="mr-[17px] lg:h-[150%] lg:w-[150%] " src={instagram} alt="" /><img className="mr-[17px]" src={telegram} alt="" /><img src={linkedin} alt="" />
            </div>
        </div>
    );
}