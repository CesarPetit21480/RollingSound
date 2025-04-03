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
  const [filteredMusic, setFilteredMusic] = useState(music);
  const [showModal, setShowModal] = useState(false);
  const [songToDelete, setSongToDelete] = useState(null);

  useEffect(() => {
    localStorage.setItem("musicData", JSON.stringify(music));
    setFilteredMusic(music);
  }, [music]);

  const onChangeInput = (e) => {
    const valor = e.target.value;
    setvalorMusic(valor);

    const musicSearch = music.filter(
      (m) =>
        m.titulo.toLowerCase().includes(valor.toLowerCase()) ||
        m.cantante.toLowerCase().includes(valor.toLowerCase())
    );

    setFilteredMusic(musicSearch);
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
      return nuevoArray;
    });
  };

const eliminarCancion = (idParaEliminar) => {
  const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar esta canción?");
  
  if (confirmacion) {
    setMusic((prevMusic) => {
      const nuevoArray = prevMusic.filter((item) => item.id !== idParaEliminar);
      localStorage.setItem("musicData", JSON.stringify(nuevoArray));
      return nuevoArray;
    });
  }
};


  const confirmarEliminacion = (id) => {
    setSongToDelete(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (songToDelete !== null) {
      eliminarCancion(songToDelete);
      setShowModal(false);
      setSongToDelete(null);
    }
  };

  return {
    valorMusic,
    onChangeInput,
    music: filteredMusic,
    actualizarObjeto,
    eliminarCancion,
    confirmarEliminacion,
    showModal,
    setShowModal,
    handleConfirmDelete,
  };
};
