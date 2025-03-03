function InputWrapper({
    label,
    htmlFor,
    children,
    className = "flex items-center justify-end font-bold text-sm sm:text-base"
}: {
    label: string;
    htmlFor: string;
    children: React.ReactNode;
    className?: string
}) {
    return (
        <>
            <label
                htmlFor={htmlFor}
                className={className}
            >
                {label}
            </label>
            {children}
        </>
    );
}

export default InputWrapper;