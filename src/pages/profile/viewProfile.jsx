import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Avatar,
  Card,
  CardContent,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import UserImage from '../../utils/images/classic.jpg';

const Profile = () => {
  // Initialisation des informations utilisateur
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    nickname: 'johndoe123',
    email: 'johndoe@example.com',
    followers: 1500,
    following: 200,
    profileImage: UserImage,
  });

  const [editedInfo, setEditedInfo] = useState({ ...userInfo });
  const [openProfileDialog, setOpenProfileDialog] = useState(false);

  // Ouvre le dialogue pour modifier le profil
  const handleProfileDialogOpen = () => {
    setEditedInfo(userInfo);
    setOpenProfileDialog(true);
  };

  // Ferme le dialogue sans enregistrer les modifications
  const handleProfileDialogClose = () => {
    setOpenProfileDialog(false);
  };

  // Enregistre les modifications du profil
  const handleEditProfile = () => {
    setUserInfo(editedInfo);
    setOpenProfileDialog(false);
  };

  return (
    <Box sx={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      {/* Section Profil Utilisateur */}
      <Card sx={{ marginBottom: 3, padding: 3 }}>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <Avatar
              alt="User Profile"
              src={userInfo.profileImage}
              sx={{ width: 100, height: 100, marginRight: 2 }}
            />
            <Box>
              <Typography variant="h4" gutterBottom>
                {userInfo.name}
              </Typography>
              <Typography variant="body1">{userInfo.nickname}</Typography>
              <Typography variant="body1">{userInfo.email}</Typography>
              <Typography variant="body1">
                {userInfo.followers} abonnés | {userInfo.following} suivis
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleProfileDialogOpen}>
            <EditIcon />
          </IconButton>
        </CardContent>
      </Card>

      {/* Dialogue pour la modification du profil */}
      <Dialog open={openProfileDialog} onClose={handleProfileDialogClose}>
        <DialogTitle>Modifier le profil</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nom"
            fullWidth
            value={editedInfo.name}
            onChange={(e) => setEditedInfo({ ...editedInfo, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Surnom"
            fullWidth
            value={editedInfo.nickname}
            onChange={(e) => setEditedInfo({ ...editedInfo, nickname: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            value={editedInfo.email}
            onChange={(e) => setEditedInfo({ ...editedInfo, email: e.target.value })}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setEditedInfo({ ...editedInfo, profileImage: URL.createObjectURL(e.target.files[0]) })}
            style={{ marginTop: 10 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProfileDialogClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleEditProfile} color="primary">
            Sauvegarder
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Profile;
