import { NavLink } from "react-router-dom";
import { Gear } from "../icons";
import { twMerge } from "tailwind-merge";


export default function Navbar() {
    return (
        <nav className="flex max-w-3xl mx-auto px-4 pt-4 sm:pt-8" >
            <ul className="relative flex grow justify-center items-center bg-zinc-50 py-3 px-8 rounded-md shadow-sm">
                <li>
                    <NavLink
                        to="/" end
                        className={({ isActive }) =>
                            twMerge(
                                "flex justify-center w-32 py-1 sm:py-1.5 font-semibold rounded-sm text-zinc-500",
                                "hover:text-zinc-800 transition-all",
                                isActive && "text-zinc-800 bg-zinc-200"
                            )
                        }
                    >
                        Calculator
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/standarts"
                        className={({ isActive }) =>
                            twMerge(
                                "flex justify-center w-32 py-1 sm:py-1.5 font-semibold rounded-sm text-zinc-500",
                                "hover:text-zinc-800 transition-all",
                                isActive && "text-zinc-800 bg-zinc-200"
                            )
                        }
                    >
                        Standarts
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

function SettingsButton() {
    return (
        <li className={twMerge(
            "absolute right-4 text-zinc-500 rounded-full p-1",
            "hover:rotate-180 hover:text-zinc-800 transition-all hover:bg-zinc-200"
        )}>
            <Gear className="size-6" />
        </li>
    )
}