import React, { useState, useEffect } from 'react';
import { fetchTopTracks } from '../playlist/utils/fetchers'; // Assurez-vous que cette fonction prend en charge la récupération des chansons
import '../../utils/styles/playlist.css';

export default function TrackList() {
  const [tracks, setTracks] = useState([]); // Pour stocker les chansons récupérées
  const [loading, setLoading] = useState(true); // Pour afficher le loading
  const [error, setError] = useState(null);     // Pour gérer les erreurs

  useEffect(() => {
    const loadTracks = async () => {
      try {
        // Limite à 20 chansons, vous pouvez ajuster ce nombre
        const data = await fetchTopTracks(40);
        setTracks(data);
      } catch (err) {
        setError('Erreur lors de la récupération des chansons');
      } finally {
        setLoading(false);
      }
    };

    loadTracks();
  }, []);

  if (loading) return <div>Chargement des chansons...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Toutes les Chansons</h1>
      <div className="tracks-container">
        {tracks.length > 0 ? (
          tracks.map((track) => (
            <div key={track.id} className="track-item">
              <img src={track.picture_small} alt={track.title} className="track-image" />
              <div className="track-info">
                <p>{track.name}</p>
                <p>{track.artist_name}</p>
                <audio controls onCanPlayThrough={() => console.log("Audio ready to play")}>
                  <source src={track.audio} type="audio/mp3" />
                  Votre navigateur ne prend pas en charge le lecteur audio.
                </audio>
              </div>
            </div>
          ))
        ) : (
          <div>Aucune chanson disponible</div>
        )}
      </div>
    </div>
  );
}
