import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const MusicPlayer = ({ player }) => {
  return (
    <AudioPlayer
      autoPlay
      src={player}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );
};

export default MusicPlayer;
