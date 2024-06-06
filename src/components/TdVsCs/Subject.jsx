import Explain from "./Explain";
export default function Subject({ subject }) {
    return (
        <ol className="">
            {subject.info.map((item, index) => (
                <Explain key={index} word={item.word}>{item.description}</Explain>
            ))}
            <img className=" mt-[27px]" src={subject.image} alt="" />
        </ol>
    );
}
