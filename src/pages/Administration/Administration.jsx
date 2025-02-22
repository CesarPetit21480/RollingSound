import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Context } from "../../Context/Context";





const Administration = () => {
  const [songs, setSongs] = useState([]); 
  const {user} = useContext(Context);
 
  useEffect(() => {
    const savedSongs = JSON.parse(localStorage.getItem("songs"));
    
    if (!savedSongs || savedSongs.length === 0) {
      const defaultSongs = [
        {
          id: 1,
          title: "De Música Ligera",
          artist: "Soda Stereo",
          image: "https://i.pinimg.com/736x/dd/e7/7d/dde77df6a4baf11fb4f296677657ccdd--rock-argentino-soda-stereo.jpg"
        }
      ];
      setSongs(defaultSongs);
      localStorage.setItem("songs", JSON.stringify(defaultSongs));
    } else {
      setSongs(savedSongs);
    }
  }, []);
  

  
  useEffect(() => {
    localStorage.setItem("songs", JSON.stringify(songs));
  }, [songs]);

  const handleUpdateSong = (updatedSong) => {
    const updatedSongs = songs.map(song =>
      song.id === updatedSong.id ? updatedSong : song
    );
    setSongs(updatedSongs);
  };

  return (
    <div className="mt-5 pt-5 pb-5 d-flex justify-content-center flex-wrap gap-3">
      {songs.map((song) => (
        <SongCard key={song.id} song={song} onUpdate={handleUpdateSong} />
      ))}
    </div>
  );
};

const SongCard = ({ song, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSong, setEditedSong] = useState(song);

  const handleChange = (e) => {
    setEditedSong({ ...editedSong, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedSong);
    setIsEditing(false);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={song.image} />
      <Card.Body>
        {isEditing ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={editedSong.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Artista</Form.Label>
              <Form.Control
                type="text"
                name="artist"
                value={editedSong.artist}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="success" type="submit" className="mt-2">Guardar</Button>
            <Button variant="secondary" className="mt-2 ms-2" onClick={() => setIsEditing(false)}>Cancelar</Button>
          </Form>
        ) : (
          <>
            <Card.Title>{song.title}</Card.Title>
            <Card.Text>{song.artist}</Card.Text>
            <Button variant="primary" onClick={() => setIsEditing(true)}>Editar</Button>
            
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default Administration;

