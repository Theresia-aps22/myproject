import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArtistTopTracks } from '../playlist/utils/fetchers';  // Fonction de fetch des chansons de l'artiste

export default function ArtistDetails() {
  const { artistId } = useParams(); // Récupère l'ID de l'artiste dans l'URL
  const [tracks, setTracks] = useState([]);  // Chansons de l'artiste
  const [loading, setLoading] = useState(true); // État de chargement
  const [error, setError] = useState(null);     // Gestion des erreurs

  useEffect(() => {
    const getArtistTracks = async () => {
      try {
        const data = await fetchArtistTopTracks(artistId); // Récupère les chansons de l'artiste
        setTracks(data); // Stocke les chansons dans l'état
      } catch (err) {
        setError('Erreur lors de la récupération des chansons');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getArtistTracks();
  }, [artistId]); // Met à jour lorsque l'ID de l'artiste change

  if (loading) {
    return <div>Loading songs...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Chansons de l'artiste</h2>
      <div className="track-list">
        {tracks.length > 0 ? (
          tracks.map((track) => (
            <div key={track.id} className="track-item">
              <h4>{track.name}</h4>
              <p>{track.album_name}</p>
              <audio controls>
                <source src={track.audio} type="audio/mp3" />
                Votre navigateur ne supporte pas la lecture audio.
              </audio>
            </div>
          ))
        ) : (
          <div>Aucune chanson disponible pour cet artiste.</div>
        )}
      </div>
    </div>
  );
}
