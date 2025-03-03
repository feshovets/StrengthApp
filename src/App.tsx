import { Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";
import Standarts from "./pages/Standarts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-300 ">
      <Navbar />
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/standarts" element={<Standarts />} />
      </Routes>
    </main>
  );
}

export default App;
