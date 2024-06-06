
export default function Opportunity({ data }) {
    return (
        <li className=" flex mb-10 gap-5 items-center">
            <div className="min-w-[53px] h-[53px] bg-customBrown flex justify-center  items-center">
                <img className="" src={data.image} alt="" />
            </div>
            <p className=" text-[16px] text-white">{data.text}</p>
        </li>
    );
}