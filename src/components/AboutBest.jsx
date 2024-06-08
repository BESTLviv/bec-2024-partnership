import Title from "./Title";
import BestLviv from "/src/assets/BestLviv.svg"
import map from "/src/assets/map.svg"
import addMap from "/src/assets/addMap.svg"
export default function Aboutbest() {
    return (
        <div className=" flex flex-col relative text-white px-[25px] mb-[150px]   ">
            <Title className=" px-[20px] mb-[30px]">ПРО BEST LVIV</Title>
            <img className=" mb-[30px] px-12" src={BestLviv} alt="" />
            <div className="mb-[25px]">BEST Lviv (Board of European Students of Technology) — осередок міжнародної неприбуткової громадської організації, який об’єднує студентів технічних спеціальностей. Нашою місією є розвиток студентів через обмін знаннями та співпрацю з компаніями, університетами та студентами Європи. </div>
            <div className="bg-ellipse w-[320px] h-[290px] left-[50%] transform translate-x-[-50%] top-[50%] absolute  z-10  filter blur-[70px]" src={addMap} alt="" > </div>
            <img className=" self-center w-[276px] h-[252px] mb-[66px]" src={map} alt="" />
            <div className=" flex flex-col self-center ">
                <p className=" flex items-center text-[16px]"><span className=" mr-3 text-[24px] font-daysOne">85</span>осередків</p>
                <p className=" flex items-center text-[16px]"><span className=" mr-3 text-[24px] font-daysOne">30</span>країн</p>
                <p className=" flex items-center text-[16px]"><span className=" mr-3 text-[24px] font-daysOne">35</span>роки досвіду</p>
            </div>
        </div>
    );
}