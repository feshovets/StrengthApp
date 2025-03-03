import { twMerge } from "tailwind-merge";

function Footer({ className }: { className?: string }) {
    return (
        <footer className={twMerge("bg-zinc-800 px-4 py-12 shadow", className)}>
            <div className="max-w-2xl mx-auto border-t border-zinc-600">

            </div>
        </footer>
    )
}

export default Footer;