import { twMerge } from "tailwind-merge"
import { ArrowDown } from "../../icons"

function SelectInput({
    id,
    value,
    setValue,
    options,
    className
}: {
    id: string,
    value: string,
    setValue: (x: string) => void,
    options: { value: string, name: string }[],
    className?: string
}) {
    return (
        <div className={twMerge("relative flex grow text-sm sm:text-base", className)}>
            <select
                id={id} key={id} value={value} onChange={(e) => setValue(e.target.value)}
                className="flex grow border border-zinc-400 py-1 px-2 rounded appearance-none peer focus:outline-zinc-500"
            >
                {options.map((option) => (
                    <option value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
            <div className="absolute flex inset-y-0 right-2 items-center pointer-events-none peer-focus:rotate-180">
                <ArrowDown className="size-3" strokeWidth={3} />
            </div>
        </div>
    )
}

export default SelectInput;