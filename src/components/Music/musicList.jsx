import React, {useState} from "react";
import { Container, Box, Card, Typography } from "@mui/material";
import MusicCard from "./musicCard";
import Recherche from '../recherche/recherche.jsx'

export default function MusicCardListForm() {
  // Styles pour les cartes
  const cardContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "16px",
    backgroundColor: "linear-gradient(145deg, #ffffff, #e6e6e6)", // Dégradé subtil
    borderRadius: "16px", // Coins arrondis pour un design moderne
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Ombre douce
  };
    const musicData = ["Artiste", ""]
    const [rechercheValue, setRechercheValue] = useState('');
    const [categorieRecherche, setCategorieRecherche] = useState('');
  
      //filtre selon le message
      // const filteredData = musicData.filter(item =>
      //     item.nom.toLowerCase().includes(rechercheValue.toLowerCase()) &&
      //     (categorieRecherche === '' || item.categorie.toLowerCase() === categorieRecherche.toLowerCase())
      // );
  

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        backgroundColor: "#fff0", // Fond sombre
        padding: "32px",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Ombre autour du conteneur principal
      }}
    >
      
      {/* <Recherche
          rechercheValue={rechercheValue}
          setRechercheValue={setRechercheValue}
      /> */}
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          color: "#ff6b6b", // Couleur accentuée
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Ombre pour le titre
        }}
      >
        Music Library
      </Typography>
      <Box sx={{ display: "flex", gap: 4, width: "100%", justifyContent: "center" }}>
        {/* Première colonne */}
        <Box sx={{ flex: 1 }}>
          {/* <Typography
            variant="h6"
            sx={{
              mb: 2,
              color: "#FFD700", // Couleur dorée pour un look premium
              textAlign: "center",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Playlist 1
          </Typography> */}
          <Card>
            <MusicCard />
            <MusicCard />
            <MusicCard />
          </Card>
        </Box>

        {/* Deuxième colonne */}
        <Box sx={{ flex: 1 }}>
          <Card>
            <MusicCard />
            <MusicCard />
            <MusicCard />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
