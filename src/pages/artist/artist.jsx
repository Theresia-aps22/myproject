import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTopArtists, fetchArtistTopTracks } from "../playlist/utils/fetchers.js";  // Import de la fonction pour récupérer les chansons
import "../../utils/styles/artist.css";

export default function Artist() {
  const [artists, setArtists] = useState([]);  // État pour stocker les artistes
  const [loading, setLoading] = useState(true); // État de chargement
  const [error, setError] = useState(null);     // État pour gérer les erreurs

  useEffect(() => {
    const getArtists = async () => {
        try {
            const artistData = await fetchTopArtists(20); // Limite de 20 artistes
            console.log("Données des artistes:", artistData); // Affiche les données récupérées des artistes
            const artistsWithTrackCount = await Promise.all(
                artistData.map(async (artist) => {
                    const tracks = await fetchArtistTopTracks(artist.id);
                    console.log(`Tracks pour ${artist.name}:`, tracks); // Vérifie les chansons récupérées pour chaque artiste
                    return { ...artist, trackCount: tracks.length }; // Ajoute le nombre de chansons
                })
            );
            setArtists(artistsWithTrackCount); // Met à jour l'état avec les artistes et leurs chansons
        } catch (err) {
            setError('Erreur lors de la récupération des artistes');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    getArtists();
}, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h4>All Artists</h4>
      <div className="artist-list">
        {artists.length > 0 ? (
          artists.map((artist) => (
            <div key={artist.id} className="div-artist">
              {/* Lien vers la page de l'artiste */}
              <Link className="link-artist" to={`/artist/${artist.id}`}>
                <p className="artist">{artist.name}</p>
                <p>{artist.trackCount} chansons disponibles</p> {/* Affichage du nombre de chansons */}
              </Link>
            </div>
          ))
        ) : (
          <div>Aucun artiste trouvé.</div>
        )}
      </div>
    </div>
  );
}
