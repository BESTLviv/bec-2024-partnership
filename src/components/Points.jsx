import classNames from 'classnames';

export default function Points({ data, ...props }) {
    return (
        <ol {...props}>
            {data.map((item, index) => <li className=" relative   before: content-[''] before:block before:w-[6px] before:h-[6px] lg:before:w-[8px] lg:before:h-[8px] before:bg-orange-400 before:absolute pl-[15px] before:left-0 before:top-[10px] lg:before:top-[16px] mb-[10px]  font-medium text-[16px] lg:text-[24px]" key={index}>{item.text}</li>)}
        </ol>
    );
}
