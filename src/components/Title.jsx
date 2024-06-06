import classNames from 'classnames';

export default function Title({ children, className }) {
    return (
        <h2 className={classNames("text-center tracking-normal font-daysOne text-white text-title mb-[35px]", className)}>{children}</h2>
    );
}
