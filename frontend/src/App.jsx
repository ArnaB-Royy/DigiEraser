import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Page imports
import Home from "./pages/Home";         // Hero-only landing page
import Download from "./pages/Download"; // Separate download page (if needed)
import Verify from "./pages/Verify";
import Team from "./pages/Team";
import Info from "./pages/Info";         // Optional: Problem/Solution page

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />             {/* Only hero section */}
            <Route path="/download" element={<Download />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/team" element={<Team />} />
            <Route path="/info" element={<Info />} />       {/* Optional full info page */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
