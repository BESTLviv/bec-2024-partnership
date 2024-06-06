import imgFullScreen from "../assets/full-screen.png"
import Header from "./Header.jsx"
export default function FullScreen() {
    return (
        <div className=" relative flex flex-col  h-screen overflow-hidden">
            <Header />
            <img className=" absolute inset-0 -z-10 object-cover h-full w-full" src={imgFullScreen} alt="" />
            <div className=" flex-grow flex flex-col justify-center  mx-[50px] mb-[40px] text-white">
                <h2 className=" text-white text-header font-daysOne mb-[18px]">BEST Engineering Competition</h2>
                <h3 className=" text-white font-jura leading-[33px] text-[28px]">25-29 жовтня</h3>
                <button className="block border-solid border-2 border-white text-white p-[10px] mt-[75px] ">Стати партнером</button>
            </div>
        </div>
    )
}