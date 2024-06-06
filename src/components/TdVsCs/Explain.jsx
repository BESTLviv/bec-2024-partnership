
export default function Explain({ children, word }) {
    return (
        <li className=" mb-3"><span>{word}</span>{children}</li>
    );
}