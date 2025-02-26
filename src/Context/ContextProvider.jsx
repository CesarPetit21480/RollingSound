import { useState } from "react";
import { Context } from "./Context";

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [track, setTracks] = useState(() => localStorage.getItem("currentTrack") || "");

    return (
        <Context.Provider value={{ user, setUser, track, setTracks }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;