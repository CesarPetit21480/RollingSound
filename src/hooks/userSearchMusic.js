import { useState, useEffect } from "react";
import data from "../data/musica.json";

export const userSearchMusic = () => {
  const musicArray = Array.isArray(data) ? data : [];  

  const getStoredMusic = () => {
    const storedMusic = localStorage.getItem("musicData");
    return storedMusic ? JSON.parse(storedMusic) : musicArray;
  };

  const [music, setMusic] = useState(getStoredMusic());
  const [valorMusic, setvalorMusic] = useState("");

  useEffect(() => {
    localStorage.setItem("musicData", JSON.stringify(music));
  }, [music]);

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

  const actualizarObjeto = (idParaActualizar, elemento) => {
    setMusic((prevMusic) => {
      let nuevoArray;

      if (!idParaActualizar) {
        const newId =
          prevMusic.length > 0
            ? Math.max(...prevMusic.map((item) => item.id)) + 1
            : 1;
        nuevoArray = [...prevMusic, { id: newId, ...elemento }];
      } else {
        nuevoArray = prevMusic.map((item) =>
          item.id === idParaActualizar ? { ...item, ...elemento } : item
        );
      }
      localStorage.setItem("musicData", JSON.stringify(nuevoArray));
      setMusic(nuevoArray);
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const musicSearch = await getMusic(valorMusic);
    setMusic(musicSearch);
  };

  return {
    valorMusic,
    onChangeInput,
    handleOnSubmit,
    music,
    actualizarObjeto,
  };
};
