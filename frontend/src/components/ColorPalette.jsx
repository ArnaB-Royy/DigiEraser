import React from "react";

const colors = [
  { name: "Logo Orange", hex: "#FF6F00" },
  { name: "Logo Green", hex: "#2E7D32" },
  { name: "Logo White", hex: "#FFFFFF", text: "#1F1F1F" },
  { name: "Charcoal Gray", hex: "#1F1F1F" },
  { name: "Soft Gray", hex: "#F5F5F5", text: "#1F1F1F" },
];

export default function ColorPalette() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] p-10 space-y-8">
      <h1 className="text-3xl font-bold text-[#1F1F1F] mb-6">
        WiपeOut Logo-Compatible Palette
      </h1>
      {colors.map((c) => (
        <div key={c.name} className="flex items-center gap-6">
          {/* Color swatch */}
          <div
            className="w-24 h-24 rounded shadow-md border border-gray-300"
            style={{ backgroundColor: c.hex }}
          ></div>
          {/* Name and hex */}
          <div
            style={{ color: c.text || c.hex }}
            className="font-semibold text-lg"
          >
            {c.name} – {c.hex}
          </div>
        </div>
      ))}
    </div>
  );
}
