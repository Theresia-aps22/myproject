import React from "react";

// Composant de recherche de plante
export default function Recherche({ rechercheValue, setRechercheValue }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px 0" }}>
      {/* Étiquette pour le champ de recherche */}
      <label htmlFor="recherche" style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "bold" }}>
        Search
      </label>
      {/* Champ de recherche */}
      <input
        id="recherche"
        type="text"
        placeholder="Recherche"
        value={rechercheValue}
        onChange={(e) => setRechercheValue(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "10px",
          fontSize: "14px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          outline: "none",
          transition: "border-color 0.2s ease-in-out",
        }}
        aria-label=" Search"
        onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />
    </div>
  );
}