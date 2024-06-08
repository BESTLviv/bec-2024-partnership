
import cross from "/src/assets/cross.svg"
export default function Purchase({ name, price }) {
    return (
        <>
            <li className="text-white mb-5  ">
                <div className="flex w-full justify-between items-center">
                    <div className=" border-white w-full border-b-[1px] flex justify-between px-[7px] pb-[9px] mr-[14px] text-[16px]">
                        <p className="">{name}</p>
                        <div>{price}</div>
                    </div>
                    <button><img src={cross} alt="" /></button>
                </div>

            </li>

        </>
    );
}
