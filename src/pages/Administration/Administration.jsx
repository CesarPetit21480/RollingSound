import React, { useState } from "react";
import { userSearchMusic } from "../../hooks/userSearchMusic";


const Administration = () => {
  const { music, actualizarObjeto } = userSearchMusic();
  const [show, setShow] = useState(false);
  const [editingSong, setEditingSong] = useState(null);
  const [formData, setFormData] = useState({
    titulo: "",
    cantante: "",
    imagen: "",
  });

  // 🏆 Abre el modal y carga los datos de la canción seleccionada
  const handleEdit = (song) => {
    setEditingSong(song.id);
    setFormData(song);
    setShow(true);
  };

  // 🚀 Maneja cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🎯 Guarda cambios o agrega una nueva canción
  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarObjeto(editingSong, formData);
    setShow(false);
    setEditingSong(null);
    setFormData({ titulo: "", cantante: "", imagen: "" });
  };

  // 🗑️ Elimina la canción
  const handleDelete = (id) => {
    actualizarObjeto(id, null);
  };

  return (
    <div className="container" style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Administración de Canciones</h2>
      <button style={{ display: "block", margin: "0 auto 20px", padding: "10px", fontSize: "16px" }} onClick={() => setShow(true)}>+ Agregar Canción</button>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {music.length > 0 ? (
          music.map((song) => (
            <div key={song.id} style={{ border: "1px solid #ccc", padding: "10px", width: "250px", textAlign: "center" }}>
              <img src={song.imagen} alt={song.titulo} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
              <h3>{song.titulo}</h3>
              <p>{song.cantante}</p>
              <button onClick={() => handleEdit(song)} style={{ marginRight: "5px", padding: "5px 10px" }}>Editar</button>
              <button onClick={() => handleDelete(song.id)} style={{ padding: "5px 10px" }}>Eliminar</button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No hay canciones disponibles.</p>
        )}
      </div>

      {show && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "white", padding: "20px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", zIndex: 1000 }}>
          <h3>{editingSong ? "Editar Canción" : "Agregar Canción"}</h3>
          <form onSubmit={handleSubmit}>
            <label>Título</label>
            <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} required style={{ display: "block", width: "100%", marginBottom: "10px" }} />
            <label>Cantante</label>
            <input type="text" name="cantante" value={formData.cantante} onChange={handleChange} required style={{ display: "block", width: "100%", marginBottom: "10px" }} />
            <label>Imagen (URL)</label>
            <input type="text" name="imagen" value={formData.imagen} onChange={handleChange} required style={{ display: "block", width: "100%", marginBottom: "10px" }} />
            <button type="submit" style={{ padding: "10px", marginRight: "10px" }}>Guardar</button>
            <button type="button" onClick={() => setShow(false)} style={{ padding: "10px" }}>Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Administration;