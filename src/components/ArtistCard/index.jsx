import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import Modal from 'react-modal'; // Importation de react-modal
import ArtistCardModal from './profile.jsx'; // Importation du composant modale externe


Modal.setAppElement('#root'); // Pour améliorer l'accessibilité


export default function ArtistCard({ artist }) {
  const [isFollowing, setIsFollowing] = useState(false); // État pour suivre/ne pas suivre
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour la fenêtre modale

  
  console.log(artist.image); // Vérifier l'URL de l'image

  const handleFollowToggle = () => {
    setIsFollowing(prevState => !prevState);
  };

  // Ouvrir la modale
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fermer la modale
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Card sx={{ width: 150, boxShadow: 2, borderRadius: 3 }}>
        <Avatar
          alt={artist.name}
          src={artist.image}
          sx={{ width: 80, height: 80, margin: '16px auto' }}
        />
        <Typography variant="h6" align="center">{artist.name}</Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {artist.followers} abonnés
        </Typography>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button 
            size="small" 
            variant="outlined" 
            color="primary" 
            startIcon={<VisibilityIcon />}
            onClick={openModal} // Ouvrir la modale lorsqu'on clique
          >
            Voir
          </Button>
        </CardActions>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button 
            size="small" 
            variant="contained" 
            color={isFollowing ? 'success' : 'primary'} // Change la couleur en fonction du statut de suivi
            onClick={handleFollowToggle}
            startIcon={isFollowing && <CheckIcon />} // Affiche l'icône de validation lorsque suivi
          >
            {isFollowing ? 'Suivi' : 'Suivre'}
          </Button>
        </CardActions>
      </Card>

      {/* Modale contenant les détails de l'artiste */}
      <ArtistCardModal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        artist={artist} // Passe les données de l'artiste au composant modale
      />
    </div>
    
  );
}
