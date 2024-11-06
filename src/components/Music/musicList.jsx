import { Card, IconButton } from "@mui/material";
import album_photo from "../../utils/images/rock.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useState } from "react";

export default function MusicCardListForm() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);  // Alterne entre lecture et pause
  };

  return (
    <Card sx={{ display: "flex", justifyContent: "space-between", padding: "16px", paddingY: "16px", alignItems: "center" }}>
      {/* Image */}
      <img src={album_photo} alt="Album cover" style={{ width: 80, height: 80, marginRight: 16 }} />
      
      <div>
        <span>Titre</span>
        <br />
        <span>Artist name</span>
      </div>

      <IconButton onClick={handlePlayPause} sx={{ alignSelf: "center" }}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />} {/* Change l'icône en fonction de l'état */}
      </IconButton>
    </Card>
  );
}
