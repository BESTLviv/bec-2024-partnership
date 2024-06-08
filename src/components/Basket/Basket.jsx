import Title from "../Title";
import { PROPOSITIONS, ADDITIONAL_PROPOSITIONS } from "/src/data.js";
import Purchase from "./Purchase";
export default function Basket() {
    return (
        <>
            <div className="text-white mx-[30px] flex flex-col  mb-[30px]">
                <Title className=" mx-[100px] mb-[25px]">КОШИК</Title>
                <div>
                    <div className=" text-[24px] font-daysOne mb-[20px] ">Пакети</div>
                    <ol>
                        <Purchase name={"solid"} price={"300$"}></Purchase>
                        <Purchase name={"solid"} price={"300$"}></Purchase>
                        <Purchase name={"solid"} price={"300$"}></Purchase>
                    </ol>
                </div>
                <div>
                    <div className=" text-[24px] font-daysOne mb-[30px] ">Опції</div>
                    <ol>
                        <Purchase name={"solid"} price={"300$"}></Purchase>
                        <Purchase name={"solid"} price={"300$"}></Purchase>
                        <Purchase name={"solid"} price={"300$"}></Purchase>
                    </ol>
                </div>

                <div className="flex justify-between">
                    <div className=" text-[24px] font-daysOne mb-[32px] ">Total:</div>
                    <div className=" flex justify-center items-center h-[32px] w-[112px] bg-proposition-button text-[18px] font-daysOne border-propositionBorder border-2">660$</div>
                </div>

            </div>
            <div className="text-white mx-[50px] flex flex-col mb-[30px] border-2 border-white p-[30px] mb-[30px]">
                <div>
                    <input className=" pl-[22px] mb-3    h-[48px]  w-full placeholder:text-borderButton border-borderButton border-[1px] bg-blackBg" type="text" name="" id="" placeholder="Введіть пошту" />
                </div>
                <div>
                    <input className=" pl-[22px] mb-[30px]    h-[48px] w-full placeholder:text-borderButton border-borderButton border-[1px] bg-blackBg" type="text" name="" id="" placeholder="Введіть назву компанії" />
                </div>
                <button className=" self-center text-propositionBorder border-2 border-propositionBorder flex justify-center items-center  h-[40px] w-[161px]">Оформити</button>

            </div>
            <div className=" text-white mx-[34px] mb-[150px]">
                <div className=" text-[24px] mb-[12px] font-daysOne ">Акції</div>
                <ol className=" text-[12px] ">
                    <li className="mb-[5px]"><span className=" text-orange-400">-10%</span> при купівлі 3–х пакетів.</li>
                    <li className="mb-[5px]"><span className=" text-orange-400">-5%</span> для компаній–партнерів EBEC’2021 та BEC’23.</li>
                    <li className="mb-[5px]"><span className=" text-orange-400">-10%</span> для всіх партнерів, що працюють у сфері military та military–tech.</li>
                    <li className="mb-[5px]">*Знижки не поєднуються.</li>
                </ol>

            </div>
        </>
    );
}
