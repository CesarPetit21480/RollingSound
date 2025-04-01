import { useState } from "react";
import { Context } from "./Context";

const ContextProvider = ({ children }) => {
  const getStoredloguer = () => {
    const storedLoguer = localStorage.getItem("usuarioLogueado");
    return storedLoguer ? JSON.parse(storedLoguer) : "";
  };

  const [loguer, setLoguer] = useState(getStoredloguer());

  const [user, setUser] = useState("");
  const [track, setTracks] = useState("");

  return (
    <Context.Provider
      value={{ user, setUser, track, setTracks, loguer, setLoguer }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
