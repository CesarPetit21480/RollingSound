import "./Buscador.css";

// eslint-disable-next-line react/prop-types
function Buscador({ valorInput, onChangeInput }) {
  return (
    <div className="form-buscador">
      <label htmlFor="busqueda">Selecciona tu Música</label>
      <div className="input-container">
        <input
          type="text"
          id="busqueda"
          value={valorInput}
          onChange={onChangeInput} 
          className="buscador"
        />
        <button type="button" disabled>🔎</button> 
      </div>
    </div>
  );
}

export default Buscador;
