import "./Buscador.css";

// eslint-disable-next-line react/prop-types
function Buscador({ valorInput, onChangeInput, handleOnSubmit }) {
  return (
    <form className="form-buscador" onSubmit={handleOnSubmit}>
      <label htmlFor="">Selecciona tu Musica </label>
      <div className="input-container">
        <input
          type="text"
          id="busqueda"
          value={valorInput}
          onChange={onChangeInput}
          className="buscador"
        />
        <button type="submit">🔎</button>
      </div>
    </form>
  );
}

export default Buscador;
