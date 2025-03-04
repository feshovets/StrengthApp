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
                id={id} key={id} value={value} onChange={(e) => { setValue(e.target.value) }}
                className={twMerge("flex grow border py-1 px-2 rounded appearance-none peer",
                    "border-zinc-300 dark:border-zinc-700 focus:outline-0 dark:bg-zinc-900"
                )}
            >
                {options.map((option) => (
                    <option className="scheme-dark-light" value={option.value} key={id + '-' + option.value}>
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