import Title from "../Title";
import { PROPOSITIONS, ADDITIONAL_PROPOSITIONS } from "/src/data.js";
import Purchase from "./Purchase";
import emailjs from 'emailjs-com';
import { useState, useEffect } from "react";

export default function Basket({ isMobile, selectedPropositions, handleRemoveProposition }) {

    const [companyName, setCompanyName] = useState("");
    const [emailName, setEmailName] = useState("");
    const [emailError, setEmailError] = useState("");
    const [companyError, setCompanyError] = useState("");

    function handleChangeName(event) {
        setCompanyName(event.target.value);
        setCompanyError("");
    }

    function handleChangeEmail(event) {
        setEmailName(event.target.value);
        setEmailError("");
    }

    let sum = selectedPropositions.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.price);
    }, 0);
    const hasThreePropositions = selectedPropositions.filter(item => !item.isSub).length === 3;
    if (hasThreePropositions) {
        sum -= sum * 0.1;
    }

    const templateId = 'template_1jalcpl';
    const userId = "-GOmILJetd9lnCKs8";

    const sendEmail = () => {
        if (!emailName || !companyName) {
            if (!emailName) {
                setEmailError("Будь ласка, введіть електронну пошту");
            }
            if (!companyName) {
                setCompanyError("Будь ласка, введіть назву компанії");
            }
            return;
        }

        if (!validateEmail(emailName)) {
            setEmailError("Будь ласка, введіть коректну електронну пошту");
            return;
        }

        emailjs.send('service_6vhjdu7', templateId, {
            company: companyName,
            email: emailName,
            propositions: selectedPropositions.map(proposition => proposition.title + ": " + proposition.price),
            totalPrice: sum
        }, userId)
            .then((response) => {
                console.log('Лист успішно надісланий!', response.status, response.text);
            }, (error) => {
                console.log('Виникла помилка під час надсилання листа:', error);
            });
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const basket = <div className="text-white mx-[50px] self-center lg:self-start flex flex-col border-2 border-white p-[30px] mb-[30px] w-[360px] lg:w-[380px] h-auto lg:max-h-[330px]">
        <div>
            <input id='email' onChange={handleChangeEmail} className="basket__submit pl-[22px] mb-3  h-[48px] lg:h-[59px] w-full placeholder:text-borderButton border-borderButton border-[1px] bg-blackBg" type="text" name="" placeholder="Введіть пошту" />
            <div className="text-red-500 mb-2">{emailError}</div>
        </div>
        <div>
            <input id='company' onChange={handleChangeName} className="basket__submit pl-[22px] mb-3  h-[48px] lg:h-[59px] w-full placeholder:text-borderButton border-borderButton border-[1px] bg-blackBg" type="text" name="" placeholder="Введіть назву компанії" />
            <div className="text-red-500">{companyError}</div>
        </div>
        <button onClick={sendEmail} className="basket__submit mt-[30px] self-center text-white border-2 border-white flex justify-center items-center h-[40px] w-[161px] lg:h-[40px] lg:w-[195px] transition-transform transform-gpu duration-[400ms] hover:scale-[1.1]">Оформити</button>
    </div>

    let lines = <div className="absolute bg-lines2 bg-contain  bg-no-repeat w-[2300px] h-[1500px] z-0  left-[5%] transform  top-[-115%]"></div>

    if (isMobile) {
        lines = <div className="absolute bg-lines2 bg-contain  bg-no-repeat w-[2300px] h-[1500px] z-0  left-[0%] transform  top-[-95%]"></div>
    }

    return (
        <div className="basket relative ">
            {lines}

            <div className="absolute bg-ellipse-black w-[1700.39px] rounded-full h-[460.22px] left-[-50%] top-[-70%] z-10 filter blur-[70px] transform rotate-[-90.56deg]"></div>
            <div className="absolute bg-ellipse-black w-[1700.39px] rounded-full h-[674.22px] left-[50%] top-[-100%] z-10 filter blur-[70px] transform rotate-[-90.56deg]"></div>

            <div className="bg-ellipse w-[564px] h-[652px] left-[90%] top-[40%] absolute scale-[1.7] transform rotate-[-63.49deg] z-10 filter blur-[90px]"></div>
            <Title className=" relative z-30  basket__title text-center lg:text-center mx-[100px] mb-[25px] lg:mb-[54px]">КОШИК</Title>
            <div className="flex relative z-30 flex-col lg:flex-row lg:justify-center lg:gap-[160px] lg:mb-[150px]">
                <div className="text-white mx-[30px] flex flex-col  lg:w-[570px]">
                    <div>
                        <div className=" text-[24px] lg:text-[36px] font-daysOne mb-[20px] ">Пакети</div>
                        <ol>
                            {selectedPropositions.map((item, index) => (
                                !item.isSub && (
                                    <Purchase handleRemoveProposition={handleRemoveProposition} key={index} name={item.title} price={item.price} />
                                )
                            ))}
                        </ol>
                    </div>
                    <div>
                        <div className="basket__section font-daysOne mb-[30px] ">Опції</div>
                        <ol>
                            {selectedPropositions.map((item, index) => (
                                item.isSub && (
                                    <Purchase handleRemoveProposition={handleRemoveProposition} key={index} name={item.title} price={item.price} />
                                )
                            ))}
                        </ol>
                    </div>
                    <div className="flex justify-between  lg:mb-[100px]">
                        <div className=" basket__section font-daysOne mb-[32px] ">Total:</div>
                        <div className="basket__total flex justify-center items-center h-[32px] w-[112px] lg:h-[43px] lg:w-[160px]  font-daysOne  bg-proposition-button border-propositionBorder border-2">{sum + "$"}</div>
                    </div>
                    {isMobile && basket}
                    <div className=" text-white  mb-[150px] ">
                        <div className=" basket__section mb-[12px] font-daysOne ">Акції</div>
                        <ol className="basket__discount w-[60%] lg:w-auto">
                            <li className="mb-[5px]"><span className=" text-orange-400">-10%</span> при купівлі 3–х пакетів.</li>
                            <li className="mb-[5px]"><span className=" text-orange-400">-5%</span> для компаній–партнерів EBEC’2021 та/або BEC’2023 (застосовується після узгодження з організаторами).</li>
                            <li className="mb-[5px]"><span className=" text-orange-400">-10%</span>  для всіх партнерів, що працюють у сфері military та military–tech (застосовується після узгодження з організаторами)</li>
                            <li className="mb-[5px]">*Знижки не поєднуються.</li>
                        </ol>

                    </div>

                </div>
                {!isMobile && basket}


            </div>


        </div>
    );
}
