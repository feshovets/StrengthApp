import { Routes, Route, NavLink, Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import Calculator from "./pages/Calculator";
import Standarts from "./pages/Standarts";
import { HelmetProvider } from "react-helmet-async";
import { Policy } from "./pages/Policy";

function App() {
  return (
    <HelmetProvider>
      <main className={twMerge("flex flex-col min-h-screen font-poppins space-y-6 sm:space-y-12",
        "bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 text-zinc-800",
        "dark:from-zinc-950 dark:via-black dark:to-zinc-950 dark:text-zinc-300")}
      >
        <Header />
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/standarts" element={<Standarts />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <Footer />
      </main>
    </HelmetProvider>
  );
}

function Header() {
  return (
    <header className="flex relative justify-between items-center h-12 sm:h-14 px-4 sm:px-16 bg-white dark:bg-zinc-900  shadow">
      <div id="logo" className="font-semibold font-poppins text-xl sm:text-2xl w-24">
        <span className="text-rose-500">Lift</span>
        <span>Stats</span>
      </div>

      <div className="flex h-full text-sm sm:text-base">
        <NavLink
          to="/" end
          className={({ isActive }) =>
            twMerge('flex items-center justify-center h-full w-24 sm:w-36 border-b-2 border-transparent transition-all',
              "font-semibold font-poppins hover:text-rose-500", isActive && 'border-zinc-800 dark:border-zinc-500')
          }
        >
          Calculator
        </NavLink>

        <NavLink
          to="/standarts"
          className={({ isActive }) =>
            twMerge('flex items-center justify-center h-full w-24 sm:w-36 border-b-2 border-transparent transition-all',
              "font-semibold font-poppins hover:text-rose-500 ", isActive && 'border-zinc-500')
          }
        >
          Standarts
        </NavLink>
      </div>

      <div className="hidden sm:flex w-24">
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row relative justify-between items-center p-4 sm:h-14 sm:px-16 mt-auto border-t-2 border-zinc-300 dark:border-zinc-700">
      <div className="text-xs sm:text-sm text-zinc-500 order-1 sm:order-none">
        <p>© 2025 LiftStats. All Rights Reserved.</p>
      </div>
      <div className="text-xs sm:text-sm space-x-4 text-zinc-500 mb-1 sm:mb-0">
        <Link to={'/'} className="hover:text-zinc-800 dark:hover:text-zinc-300">About</Link>
        <Link to={'/policy'} className="hover:text-zinc-800 dark:hover:text-zinc-300">Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default App;
