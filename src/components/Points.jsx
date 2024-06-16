import classNames from 'classnames';

export default function Points({ data, ...props }) {
    return (
        <ol {...props}>
            {data.map((item, index) => <li className=" relative partner__text  before: content-[''] before:block before:w-[6px] before:h-[6px] 1090xl:before:w-[8px] 1090xl:before:h-[8px] before:bg-orange-400 before:absolute pl-[15px] before:left-0 before:top-[10px] 1090xl:before:top-[16px] mb-[10px] 1090xl:mb-[5px] " key={index}>{item.text}</li>)}
        </ol>
    );
}
