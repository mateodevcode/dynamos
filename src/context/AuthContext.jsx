"use client"

import { Drawer } from "@chakra-ui/react";
import { createContext, useState, useContext } from "react";
// import { loginRequest, registerRequest } from "../api/auth";
import { useEffect } from "react";
import DrawerEventos from "../components/DrawerEventos";

export const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  // const [darkMode, setDarkMode] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(null);

  // const singup = async (user) => {
  //   try {
  //     const res = await registerRequest(user);
  //     setUser(res.data);
  //     setIsAuthenticated(true);
  //   } catch (error) {
  //     console.log(error.response.data);
  //     setErrors(error.response.data);
  //   }
  // };

  // const signin = async (user) => {
  //   try {
  //     const res = await loginRequest(user);
  //     console.log(res);
  //   } catch (error) {
  //     if (Array.isArray(error.response.data)) {
  //       return setErrors(error.response.data);
  //     }
  //     setErrors([error.response.data.message]);
  //   }

  // };

  useEffect(() => {
    const logitudError = errors.length;
    if (logitudError > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);


  // const manejarDark = () => {
  //   setDarkMode(!darkMode);
  //   if (darkMode) {
  //     document.body.classList.remove("dark");
  //   } else {
  //     document.body.classList.add("dark");
  //   }
  // };


  const onclickMenu = () => {
    if (!mostrarMenu) {
      setMostrarMenu(true);
    } else {
      setMostrarMenu(false);
    }
  };

  const handleClick = (indice) => {
    setIndiceSeleccionado(indice);
  };
  


  return (
    <AuthContext.Provider value={{ errors, mostrarMenu, onclickMenu, handleClick, indiceSeleccionado }}>
      {children}
    </AuthContext.Provider>
  );
};
