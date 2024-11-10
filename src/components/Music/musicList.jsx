import { Card, IconButton } from "@mui/material";
import album_photo from "../../utils/images/rock.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useState } from "react";
import MusicCard from "./musicCard";

export default function MusicCardListForm() {
  return (
    <div >
        <h2>Musics</h2>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
    </div>
  );
}
