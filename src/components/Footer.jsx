import BestLviv from "/src/assets/BestLviv.svg"
import instagram from "/src/assets/instagram.svg"
import telegram from "/src/assets/telegram.svg"
import linkedin from "/src/assets/linkedin.svg"
export default function Footer() {
    return (
        <div className=" relative  h-6 bg-black flex text-white px-[34px] mb-[10px]   ">
            <p className=" text-[16px] font-daysOne mr-[84px]">2024</p>
            <img className=" w-12 mr-[66px]" src={BestLviv} alt="" />
            <div className="flex   w-12 ">
                <img className="mr-[17px]" src={instagram} alt="" /><img className="mr-[17px]" src={telegram} alt="" /><img src={linkedin} alt="" />
            </div>
        </div>
    );
}