import Title from "./Title";
import BestLviv from "/src/assets/BestLviv.svg"
import map from "/src/assets/map.svg"
import addMap from "/src/assets/addMap.svg"
export default function Aboutbest() {
    return (
        <div className=" flex flex-col relative text-white px-[25px] mb-[150px]   ">
            <Title className=" px-[20px] mb-[30px]">ПРО BEST LVIV</Title>
            <img className=" mb-[30px] px-12" src={BestLviv} alt="" />
            <div>BEST Lviv (Board of European Students of Technology) — осередок міжнародної неприбуткової громадської організації, який об’єднує студентів технічних спеціальностей. Нашою місією є розвиток студентів через обмін знаннями та співпрацю з компаніями, університетами та студентами Європи. </div>
            <div className="rounded-full  self-center bg-add-map bg-contain flex justify-center items-center w-[321px] h-[293px]  mb-[26px]" src={addMap} alt="" > <img className=" w-[276px] h-[252px] " src={map} alt="" /></div>
            <div className=" flex flex-col self-center ">
                <p className=" flex items-center text-[16px]"><span className=" mr-3 text-[24px] font-daysOne">85</span>осередків</p>
                <p className=" flex items-center text-[16px]"><span className=" mr-3 text-[24px] font-daysOne">30</span>країн</p>
                <p className=" flex items-center text-[16px]"><span className=" mr-3 text-[24px] font-daysOne">35</span>роки досвіду</p>
            </div>
        </div>
    );
}