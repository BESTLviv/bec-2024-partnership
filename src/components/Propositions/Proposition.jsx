import React, { useState } from 'react';
import Points from "../Points";
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
const CORE_PROPOSITION = "Solid Base";

export function Proposition({ proposition, addToBasket, isActive, handleRemoveProposition }) {
    const { t } = useTranslation()
    const propositionsInfo = t('packetsInfo.propositions', { returnObjects: true });

    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleClickOnBlock() {
        if (isActive && CORE_PROPOSITION != proposition.title) {
            handleRemoveProposition(proposition.title)
        }
        else {
            addToBasket(proposition.title, proposition.price, false);
        }
    }

    let classBlock = "transition-transform transform-gpu duration-[400ms] hover:scale-[1.05]  cursor-pointer  relative flex  flex-col cursor-pointer text-white mb-10 lg:mb-0 w-full lg:w-full lg:h-[515px] h-[456px]  px-[25px] lg:px-[63px] bg-proposition-gradient p-5  text-[12px] font-medium";
    let classButton = "font-workSans self-center box-border text-[24px] absolute left-1/2 bg-proposition-button transform translate-y-1/2 -translate-x-1/2 bottom-0 w-[112px] h-[42px] border-solid border-2 border-white flex justify-center items-center";

    if (isActive) {
        classBlock += " clicked";
        classButton += " clicked";
    }
    const propositionInfo = propositionsInfo.find(item => item.title === proposition.title)
    console.log(propositionsInfo)
    return (
        <>
            <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
                {
                    <div className=' info-container text-white'>
                        <p className=' info-propo mb-2 font-daysOne'>{propositionInfo.title}</p>
                        {
                            propositionInfo.points.map((item, index) =>
                                <div key={index}>
                                    <p className=' info-title mb-2 font-daysOne'>{item.text}</p>
                                    <p className=' info-description mb-4'>{item.description}</p>
                                </div>
                            )
                        }

                    </div>
                }
            </Modal>
            <div id="proposition" onClick={handleClickOnBlock} className={classBlock}>
                <button
                    className=" border-solid border-[3px] border-white rounded-full text-white flex justify-center items-center self-end lg:absolute lg:top-[4%]"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsModalVisible(true);
                    }}
                >
                    i
                </button>
                <p className=" proposition__title text-[24px] font-daysOne uppercase mb-[12px]">{proposition.title}</p>
                <Points data={proposition.points} className="before:top-[6px] step1:before:top-[8px] step3:before:top-[10px] lg:before:top-[11px] 3xl:before:top-[14px] before:w-[7px] before:h-[7px] 1090xl:before:w-[8px] 1090xl:before:h-[8px]"></Points>
                <div className="absolute transform -translate-y-[125%] bottom-0 inline-block w-auto border-solid border-[1px] border-customGray text-customGray text-[12px] p-[10px]">{proposition.subInfo}</div>
                <button className={classButton}>{proposition.price}$</button>


            </div>
        </>

    );
}

export function SubProposition({ proposition, isMobile, addToBasket, handleRemoveProposition, isActive }) {
    const { t } = useTranslation()
    const additionalPropositionsInfo = t('additionalPropositionsInfo', { returnObjects: true });

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(false);



    const handleCheckboxChange = () => {
        if (isChecked) {
            handleRemoveProposition(proposition.text);
        } else {
            addToBasket(proposition.text, proposition.price, true);
        }
        setIsChecked(!isChecked);
    };

    const handleClickOnBlock = () => {
        if (isChecked) {
            handleRemoveProposition(proposition.text);
        } else {
            addToBasket(proposition.text, proposition.price, true);
        }
        setIsChecked(!isChecked);
    };
    let classBlock = "transition-transform transform-gpu duration-[400ms] hover:scale-[1.02] cursor-pointer relative flex items-center justify-center text-white w-full lg:w-full p-[15px] bg-proposition-gradient lg:mb-[22px] mb-[10px] lg:px-[32px] lg:py-[19px] text-[14px] ";
    let classButton = "flex-grow-0 flex-shrink-0 add-proposition__button font-workSans box-border text-[14px] lg:text-[20px] relative bg-proposition-button border-[1px] flex justify-center items-center self-center mr-3 lg:mr-5";
    let classCheckBox = "mr-[12px] lg:mr-[20px] self-center custom-checkbox translate-y-[5px]  h-[10px] w-[10px] lg:h-[24px] lg:w-[24px] focus:outline-none"
    let classText = "add-proposition__name break-words pr-[35px] max-w-[300px]   lg:w-aut"
    if (isActive) {
        classBlock += " clicked";
        classButton += " clicked";
    }

    if (proposition.special) {
        classCheckBox = "mr-[12px] lg:mr-[20px] self-center custom-checkbox transform translate-y-[10px]  h-[10px] w-[10px] lg:h-[24px] lg:w-[24px] focus:outline-none"
    }

    let extra =
        <div className="sub-propositions__extra border w-full border-extra flex justify-center items-center">{proposition.special}</div>

    let buttons = <div className='flex flex-col  lg:flex-row'>
        <div className='flex mb-2  justify-center items-center'>
            <button className={classButton}>
                {proposition.price}$
            </button>
            <button
                className=" lg:mr-2 flex-grow-0 flex-shrink-0 transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] w-5 h-5 lg:w-[26px] lg:h-[26px] lg:text-[16px] border-solid border-[3px] border-white rounded-full text-white flex justify-center items-center"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsModalVisible(true);
                }}
            >
                i
            </button>
        </div>

        {proposition.special && extra}
    </div>




    if (!isMobile || proposition.special == null) {
        classCheckBox = "mr-[12px] lg:mr-[20px] self-center custom-checkbox transform translate-y-[4px]  h-[10px] w-[10px] lg:h-[24px] lg:w-[24px] focus:outline-none"
        classText = "add-proposition__name break-words pr-[35px] lg:w-auto"
        buttons = <div className='flex flex-col lg:flex-row'>

            {proposition.special && extra}
            <div className='flex justify-center items-center '>
                <button className={classButton}>
                    {proposition.price}$
                </button>
                <button
                    className=" lg:mr-2 flex-grow-0 flex-shrink-0 transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] w-5 h-5 lg:w-[26px] lg:h-[26px] lg:text-[16px] border-solid border-[3px] border-white rounded-full text-white flex justify-center items-center"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsModalVisible(true);
                    }}
                >
                    i
                </button>
            </div>


        </div>
    }

    return (
        <>
            <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} className="  ">
                {additionalPropositionsInfo.map((info, index) =>
                    <div className=' info-container text-white' key={index}>
                        <p className='  info-title mb-2 font-daysOne'>{info.title}</p>
                        <p className=' info-description mb-4'>{info.description}</p>
                    </div>)}
            </Modal>
            <div className={classBlock} onClick={handleClickOnBlock}>
                <div className="flex items-center justify-center self-start ">
                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={handleCheckboxChange}
                        className={classCheckBox}
                    />
                </div>
                <div className="flex-grow">
                    <p className={classText}>{proposition.text}</p>
                </div>

                {buttons}


            </div>
        </>


    );
}
export function Modal({ isVisible, onClose, children }) {


    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);

    if (!isVisible) {
        return null;
    }

    return (
        <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div id="customModal" className=" flex flex-col modal custom-scrollbar overflow-y-auto w-[75%] h-[75%] bg-proposition-gradient p-8 pt-[9px] relative border-4 border-propositionBorder">
                <button
                    className="cross self-end block  text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >

                </button>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}