
export default function Opportunity({ data }) {
    return (
        <li className=" flex mb-10 gap-5 items-center relative z-20">
            <div className="min-w-[53px] h-[53px]  flex justify-center  items-center">
                <img className="" src={data.image} alt="" />
            </div>
            <p className=" text-[16px] max-w-[246px] text-white">{data.text}</p>
        </li>
    );
}