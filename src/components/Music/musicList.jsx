import { Card, IconButton } from "@mui/material";
import album_photo from "../../utils/images/rock.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useState } from "react";

export default function MusicCardListForm() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Styles séparés
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    height: "90px",
  };

  const imageStyle = {
    width: 60,
    height: 80,
    marginRight: 16,
  };

  const textStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <Card sx={cardStyle}>
      {/* Image à gauche */}
      <img src={album_photo} alt="Album cover" style={imageStyle} />

      {/* Texte au centre */}
      <div style={textStyle}>
        <span>Titre</span>
        <span>Artist name</span>
      </div>

      {/* Bouton Play/Pause à droite */}
      <IconButton onClick={handlePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
    </Card>
  );
}
