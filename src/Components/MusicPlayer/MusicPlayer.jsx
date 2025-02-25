import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import data from "../../data/musica.json";

/*const MusicPlayer = () => {
const id =1;

  const info = Array.isArray(data) ? data : data.musica;

  const musicaElegida = info.find((m) => m.id === id);
  console.log('recibo el id')
  

  return (
    <AudioPlayer
      autoPlay
      src={musicaElegida.music_route}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );
};


export default MusicPlayer;*/
const MusicPlayer = ({ id }) => {
  const info = Array.isArray(data) ? data : data.musica;

  const musicaElegida = info.find((m) => m.id === id);

  if (!musicaElegida) {
    return <p>No se encontró la canción</p>;
  }

  return (
    <AudioPlayer
      autoPlay
      src={musicaElegida.music_route}
      onPlay={() => console.log("Reproduciendo:", musicaElegida.titulo)}
    />
  );
};

export default MusicPlayer;
