import React from 'react';
import Modal from 'react-modal';
import MusicCard from '../Music/musicCard.jsx';

Modal.setAppElement('#root'); // Pour améliorer l'accessibilité

export default function ArtistCardModal({ isOpen, closeModal, artist }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Profil de l'artiste"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)', // Floutte l'arrière-plan
          zIndex: 1000, // Pour garantir que l'overlay se trouve derrière la modale
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          borderRadius: '12px',
          width: '90%', // Rendre la largeur flexible
          maxWidth: '500px', // Limite la largeur maximale pour les écrans plus larges
          backgroundColor: 'white',
          maxHeight: '80vh', // Limite la hauteur maximale de la modale
          overflowY: 'auto', // Permet de faire défiler le contenu si nécessaire
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Ombre légère autour de la modale
        },
      }}
    >
      <button 
        onClick={closeModal} 
        style={{ 
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          border: 'none', 
          background: 'transparent', 
          fontSize: '24px', 
          cursor: 'pointer', 
          color: '#333', 
        }}
      >
        &times; {/* Symbole × pour la fermeture */}
      </button>
      <div style={{ textAlign: 'center' }}>
        <img 
          src={artist.image} 
          alt={artist.name} 
          style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px' }} 
        />
        <h1 style={{ fontSize: '24px', fontWeight: '600', margin: '20px 0' }}>{artist.name}</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>{artist.bio}</p>
        <p style={{ fontSize: '16px', color: '#777' }}>{artist.followers} abonnés</p>
        <p style={{ fontSize: '16px', color: '#777' }}>{artist.songsCreated} chansons créées</p>
        <h2 style={{ fontSize: '20px', marginTop: '20px', fontWeight: '500' }}>Chansons</h2>
        
        {/* Vérification de la présence de chansons */}
        {artist.songs && artist.songs.length > 0 ? (
          <ul style={{ paddingLeft: '20px', color: '#555' }}>
            {artist.songs.map((song, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: '500' }}>{song.title}</span> - {song.releaseDate}
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucune chanson</p>
        )}
        
        {/* Exemple de MusicCard */}
        <div style={{ marginTop: '20px' }}>
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </div>
      </div>
    </Modal>
  );
}
