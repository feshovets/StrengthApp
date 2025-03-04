import { twMerge } from "tailwind-merge";

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    const { className, ...otherProps } = props;

    return <input {...otherProps} className={twMerge("border-zinc-300 dark:border-zinc-700 focus:outline-0", className)} />;
}

export default Input;