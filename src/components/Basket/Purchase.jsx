

export default function Purchase({ name, price }) {
    return (
        <>
            <li className="text-white mb-5 border-b-[1px] border-white">
                <div className="flex justify-between px-[7px] pb-[9px] text-[16px]">
                    <p className="">{name}</p>
                    <div>{price}</div>
                </div>
            </li>

        </>
    );
}
