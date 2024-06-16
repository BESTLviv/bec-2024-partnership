import React from 'react';
import cross from "/src/assets/cross.svg";

export default function Purchase({ name, price, handleRemoveProposition }) {
    return (
        <li className="text-white mb-5">
            <div className="flex w-full justify-between items-center">
                <div className="basket__text border-white w-full font-workSans border-b-[1px] flex justify-between px-[7px] pb-[9px] mr-[14px]">
                    <p className="">{name}</p>
                    <div>{price + "$"}</div>
                </div>
                <button onClick={() => { name !== "Solid Base" ? handleRemoveProposition(name) : "" }}>
                    <img className=" lg:w-[30px] lg:h-[30px] transition-transform transform-gpu duration-[400ms] hover:scale-[1.3]" src={cross} alt="Remove" />
                </button>
            </div>
        </li>
    );
}
