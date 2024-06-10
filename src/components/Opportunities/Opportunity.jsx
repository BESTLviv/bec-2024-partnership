
export default function Opportunity({ isMobile, data }) {
    return (
        <li className=" flex justify-center opportunity w-full gap-5 items-center relative z-20 h-[90px]">
            {isMobile == true ? <div className="  flex justify-center  items-center">

                <img className="" src={data.image} alt="" />
            </div> : undefined}

            <p style={{ fontSize: 'calc(14px + 6 * (100vw - 320px) / 1120)' }} className=" flex items-center text-[16px] max-w-[246px] lg:max-w-[344px] h-[90px] text-white">{data.text}</p>
        </li>
    );
}