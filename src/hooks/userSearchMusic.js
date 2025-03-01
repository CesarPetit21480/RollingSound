import { useState } from "react";
import data from "../data/musica.json";

export const userSearchMusic = () => {
     const musicArray = Array.isArray(data) ? data : data.musica;

  const [music, setMusic] = useState(musicArray);
  const [valorMusic, setvalorMusic] = useState("");

  const onChangeInput = (e) => {
    const valor = e.target.value;
    setvalorMusic(valor);
  };

  const getMusic = async (filter) => {
    let totalMusic = [];
   
    if (!filter) totalMusic = musicArray;
    else {
      const musicFilter = musicArray.filter(
        (m) =>
          m.titulo.toLowerCase().includes(filter.toLowerCase()) ||
          m.cantante.toLowerCase().includes(filter.toLowerCase())
      );
      totalMusic = musicFilter;
    }

    return totalMusic;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const musicSearch = await getMusic(valorMusic);
    setMusic(music);

    setMusic(musicSearch);
  };

  return {
    valorMusic,
    onChangeInput,
    handleOnSubmit,
    music,
  };
};
