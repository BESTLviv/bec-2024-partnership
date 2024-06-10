import Explain from "./Explain";
export default function Subject({ subject, isLast }) {
    return (
        <ol className={`relative z-30 ${isLast ? '' : 'mb-[60px]'} lg:w-[372px]`}>
            {subject.info.map((item, index) => (
                <Explain key={index} word={item.word}>{item.description}</Explain>
            ))}
            <img className=" mt-[27px]" src={subject.image} alt="" />
        </ol>
    );
}
