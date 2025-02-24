import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import data from "../../data/musica.json";

const MusicPlayer = () => {
  const id =1;

  const info = Array.isArray(data) ? data : data.musica;

  const musicaElegida = info.find((m) => m.id === id);

  return (
    <AudioPlayer
      autoPlay
      src={musicaElegida.player}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );
};

export default MusicPlayer;
