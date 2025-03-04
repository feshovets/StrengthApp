import { twMerge } from "tailwind-merge";
import { ArrowDown } from "../../icons";
import Input from "./Input";

export default function WeightInput({
    id,
    min = 0,
    max = 2000,
    className,
    units,
    setUnits,
    weight,
    setWeight,
}: {
    id: string,
    min?: number,
    max?: number,
    className?: string,
    units: string,
    setUnits: (x: string | null) => void,
    weight: number | null,
    setWeight: (x: number | null) => void,
}) {
    return (
        <div className={twMerge("relative flex grow text-sm sm:text-base", className)}>
            <Input
                id={id} type="number" min={min} max={max} value={weight ?? ""} onChange={(e) => { setWeight(e.target.value ? Number(e.target.value) : null) }}
                className={"flex appearance-none grow border px-2 rounded-s h-full"}
            />
            <select
                id="units" onChange={(e) => { setUnits(e.target.value) }} value={units}
                className={twMerge("peer w-12 sm:w-14 border border-s-0 rounded-e appearance-none px-1.5 sm:px-2",
                    "border-zinc-300 dark:border-zinc-700 focus:outline-0 dark:bg-zinc-900"
                )}
            >
                <option value="kg">kg</option>
                <option value="lb">lb</option>
            </select>
            <div className="absolute flex inset-y-0 right-2 items-center pointer-events-none peer-focus:rotate-180">
                <ArrowDown className="size-3" strokeWidth={3} />
            </div>
        </div>
    )
}