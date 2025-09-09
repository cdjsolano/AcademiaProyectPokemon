import React, { useState } from "react";
import * as Icons from "lucide-react";


export default function IconGallery() {
  const [search, setSearch] = useState("");

  // Filtrar solo íconos válidos (con displayName) y aplicar búsqueda
  const filteredIcons = Object.keys(Icons)
    .filter((name) => {
      const Icon = Icons[name];
      return typeof Icon === "function" && Icon.displayName; // 👈 evita helpers
    })
    .filter((name) => name.toLowerCase().includes(search.toLowerCase()));

    console.log(filteredIcons)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lucide Icon Gallery</h1>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar ícono..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-2 border rounded w-full"
      />

      {/* Grid de íconos */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6">
        {filteredIcons.map((name) => {
          const Icon = Icons[name];
          return (
            <div
              key={name}
              className="flex flex-col items-center text-center text-lg"
            >
              <Icon className="w-6 h-6 mb-1" />
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
