import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import data from "../../data/musica.json";
import { Context } from "../../Context/Context";
import { useContext, useState,useEffect } from "react";

const MusicPlayer = () => {
  const { track } = useContext(Context);
  const [currentTrack, setCurrentTrack] = useState(null);

  const info = Array.isArray(data) ? data : data.musica;

  const musicaElegida = info.find((m) => m.id === track);

  useEffect(() => {
    if (musicaElegida) {
      setCurrentTrack(musicaElegida.player);
    }
  }, [track]);

  if (!currentTrack) return null;

  return (
    <AudioPlayer
      autoPlay
      src={currentTrack || ""}
      onPlay={() => console.log("Reproduciendo:", currentTrack)}
      onEnded={() => console.log("Canción terminada")}
      showSkipControls={false}
      showJumpControls={false}
      volume={0.8}
      // style={{ background:"tranparent" }}
    />
  );
};




export default MusicPlayer;
