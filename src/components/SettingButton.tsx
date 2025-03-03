import { Gear } from "../icons";
import { twMerge } from "tailwind-merge";

export function SettingsButton() {
    return (
        <li className={twMerge(
            "absolute right-4 text-zinc-500 rounded-full p-1",
            "hover:rotate-180 hover:text-zinc-800 transition-all hover:bg-zinc-200"
        )}>
            <Gear className="size-6" />
        </li>
    )
}