import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Alert, Image } from "react-bootstrap";
import AlbumModal from "./AlbumModal";

const Administration = ({ isAuthenticated }) => {
  const [albums, setAlbums] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editedAlbum, setEditedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const savedAlbums = JSON.parse(localStorage.getItem("albums")) || [];
    setAlbums(savedAlbums);
  }, []);

  useEffect(() => {
    localStorage.setItem("albums", JSON.stringify(albums));
  }, [albums]);

  const handleSaveAlbum = (newAlbum) => {
    if (editedAlbum) {
      const updatedAlbums = albums.map((album) =>
        album.name === editedAlbum.name ? { ...editedAlbum, ...newAlbum } : album
      );
      setAlbums(updatedAlbums);
    } else {
      setAlbums([...albums, { id: Date.now(), ...newAlbum }]);
    }
    setShowModal(false);
  };

  const handleEditAlbum = (album) => {
    setEditedAlbum(album);
    setShowModal(true);
  };

  const handleDeleteAlbum = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este álbum?")) {
      setAlbums(albums.filter((album) => album.id !== id));
    }
  };

  if (isAuthenticated) {
    return <div className="text-center mt-5 pt-5 pb-5"><Alert variant="danger">No tienes permiso para ver esta página.</Alert></div>;
  }

  return (
    <div className="mt-5 pt-5 pb-5 container">
      <Button variant="primary" onClick={() => setShowModal(true)}>
        + Agregar Álbum
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Álbum</th>
            <th>Género</th>
            <th>Canciones</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
              <td>
                {album.imageUrl && (
                  <Image
                    src={album.imageUrl}
                    thumbnail
                    style={{ width: "100px", cursor: "pointer" }}
                    onClick={() => setSelectedImage(album.imageUrl)}
                  />
                )}
              </td>
              <td>{album.name}</td>
              <td>{album.genre}</td>
              <td>
                <ul>
                  {album.songs.map((song, index) => (
                    <li key={index}>{song}</li>
                  ))}
                </ul>
              </td>
              <td>
                <Button variant="warning" onClick={() => handleEditAlbum(album)}>
                  Editar
                </Button>
                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={() => handleDeleteAlbum(album.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AlbumModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onSave={handleSaveAlbum}
        editedAlbum={editedAlbum}
      />
      <Modal show={!!selectedImage} onHide={() => setSelectedImage(null)} centered>
        <Modal.Body className="text-center">
          {selectedImage && <Image src={selectedImage} fluid />}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Administration;
