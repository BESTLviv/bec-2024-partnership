import Explain from "./Explain";

export default function Subject({ subject, isLast }) {
    return (
        <ol className={`flex flex-col relative ${isLast ? '' : 'mb-[60px]'} lg:mb-0 z-30 lg:w-[372px]`}>
            <div className=" flex-grow mb-[10px] lg:mb-[20px]">
                {subject.info.map((item, index) => (
                    <Explain key={index} word={item.word}>{item.description}</Explain>
                ))}
            </div>
            <img className=" self-center lg:self-start vs__image" src={subject.image} alt="" />
        </ol>
        // ${isLast ? '' : 'mb-[60px]'} 
    );
}
