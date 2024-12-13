// context/favoriteSongContext.jsx
import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

const FavoritesProvider = ({ children }) => {
  const [favoriteTracks, setFavoriteTracks] = useState([]);

  // Ajouter un morceau aux favoris
  const addToFavorites = (track) => {
    if (!favoriteTracks.some(favTrack => favTrack.id === track.id)) {
      setFavoriteTracks([...favoriteTracks, track]);
    }
  };

  // Retirer un morceau des favoris
  const removeFromFavorites = (track) => {
    setFavoriteTracks(favoriteTracks.filter(favTrack => favTrack.id !== track.id));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteTracks, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider