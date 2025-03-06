import { useState, useEffect } from "react";
import usuarios from "../data/usuarios.json";

export const userSearchHook = () => {
    const usuariosArray = Array.isArray(usuarios) ? usuarios : [];

    const getUsuarios = () => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : usuariosArray;
    };

    const [user, setUser] = useState(getUsuarios());

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);


    const actualizarUsuario = async (elemento) => {
        console.log("objeto", elemento);
        setUser((prevUser) => {
            let nuevoArray;
            const newId =
                prevUser.length > 0
                    ? Math.max(...prevUser.map((item) => item.id)) + 1
                    : 1;
            nuevoArray = [...prevUser, { id: newId, ...elemento }];

            localStorage.setItem("user", JSON.stringify(nuevoArray));
            console.log("nuevoArray", nuevoArray)
            return nuevoArray;
        });
    };

    return {
        user,
        actualizarUsuario
    };
};
