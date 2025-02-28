import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AlbumModal = ({ show, handleClose, onSave, editedAlbum }) => {
  const [album, setAlbum] = useState(
    editedAlbum || { name: "", genre: "", songs: [], imageUrl: "" }
  );
  const [newSong, setNewSong] = useState("");

  useEffect(() => {
    setAlbum(editedAlbum || { name: "", genre: "", songs: [], imageUrl: "" });
  }, [editedAlbum]);

  const handleChange = (e) => {
    setAlbum({ ...album, [e.target.name]: e.target.value });
  };

  const handleAddSong = () => {
    if (newSong.trim()) {
      setAlbum({ ...album, songs: [...album.songs, newSong] });
      setNewSong("");
    }
  };

  const handleRemoveSong = (index) => {
    setAlbum({ ...album, songs: album.songs.filter((_, i) => i !== index) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!album.name || !album.genre) return;
    onSave(album);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{editedAlbum ? "Editar Álbum" : "Agregar Álbum"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre del Álbum</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={album.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Género</Form.Label>
            <Form.Control
              type="text"
              name="genre"
              value={album.genre}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>URL de la Imagen</Form.Label>
            <Form.Control
              type="text"
              name="imageUrl"
              value={album.imageUrl}
              onChange={handleChange}
              placeholder="Introduce la URL de la imagen"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Canciones</Form.Label>
            <ul>
              {album.songs.map((song, index) => (
                <li key={index}>
                  {song} <Button variant="danger" size="sm" onClick={() => handleRemoveSong(index)}>Eliminar</Button>
                </li>
              ))}
            </ul>
            <Form.Control
              type="text"
              value={newSong}
              onChange={(e) => setNewSong(e.target.value)}
              placeholder="Agregar canción"
            />
            <Button variant="secondary" className="mt-2" onClick={handleAddSong}>
              + Agregar Canción
            </Button>
          </Form.Group>
          <Button variant="success" type="submit" className="mt-3 w-100">
            {editedAlbum ? "Actualizar" : "Guardar"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AlbumModal;
