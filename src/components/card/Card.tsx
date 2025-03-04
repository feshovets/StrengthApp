import { twMerge } from "tailwind-merge";

function Card(props: React.InputHTMLAttributes<HTMLDivElement>) {
    const { className, ...otherProps } = props;
    return <div {...otherProps} className={twMerge("bg-white dark:bg-zinc-900 rounded-md shadow-sm", className)} />
}

export default Card;