import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo – no pill, original colors */}
      <NavLink to="/" className="text-2xl font-bold flex items-center gap-1">
        <span className="text-[#FF6F00]">Wiप</span>
        <span className="text-white">e</span>
        <span className="text-[#2E7D32]">Out</span>
      </NavLink>

      {/* Nav Links – centered, original pill width */}
      <div className="flex-1 flex justify-center ml-25 mt-5">
        <div className="bg-white/20 px-4 py-2 rounded-full shadow inline-block">
          {["Home", "Download", "Verify", "Team", "About"].map((link) => (
            <NavLink
              key={link}
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-2 font-semibold transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-[#FF6F00]"
                    : "text-[#2E7D32] hover:text-[#FF6F00]"
                }`
              }
            >
              {link}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Login/Register buttons – right */}
      <div className="flex items-center gap-3">
        {[
          { label: "Login", bg: "#FF6F00", text: "black" },
          { label: "Register", bg: "#2E7D32", text: "white" },
        ].map((btn) => (
          <button
            key={btn.label}
            className="font-semibold px-6 py-3 rounded-md shadow-lg transition-all duration-300"
            style={{
              backgroundColor: btn.bg,
              color: btn.text,
              boxShadow: `0 4px 12px ${btn.bg}88`,
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
