"use client";

import { api } from "@/components/common/axios/page";
import { useRouter } from "next/navigation";
import { useContext, createContext, use } from "react";
import { toast } from "react-toastify";
import { FaImage } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isReady, setIsReady] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [color, setColor] = useState("");
  const [showMoadl1, setShowModal1] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [emoji, setEmoji] = useState(false);
  const [newIcon, setNewIcon] = useState(<FaImage />);
  const [newIconColor, setNewIconColor] = useState("#000000");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter();

  const isContainsUpperCase = (password) => {
    for (let i = 0; i < password.length; i++)
      if (password[i].charCodeAt(0) >= 64 && password[i].charCodeAt(0) <= 90) {
        return 1;
      }

    return 0;
  };

  const isContainsNumber = (password) => {
    for (let i = 0; i < password.length; i++) {
      if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {
        return 1;
      }
    }

    return 0;
  };

  const isContainsSpecialCharacter = (password) => {
    for (let i = 0; i < password.length; i++)
      if (
        (password[i].charCodeAt(0) >= 33 && password[i].charCodeAt(0) <= 47) ||
        (password[i].charCodeAt(0) >= 58 && password[i].charCodeAt(0) <= 64) ||
        (password[i].charCodeAt(0) >= 91 && password[i].charCodeAt(0) <= 96) ||
        (password[i].charCodeAt(0) >= 123 && password[i].charCodeAt(0) <= 126)
      ) {
        return 1;
      }

    return 0;
  };

  const isLengthGreaterThan8 = (password) => {
    return password.length >= 8 ? 1 : 0;
  };

  const calcaluteStrength = (password) => {
    let strength = 0;

    strength += isContainsNumber(password);
    strength += isContainsSpecialCharacter(password);
    strength += isContainsUpperCase(password);
    strength += isLengthGreaterThan8(password);

    return strength;
  };

  const signIn = async (email, password) => {
    // setIsLoading(true);

    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const signUp = async (name, email, password) => {
    // setIsLoading(true);

    try {
      const { data } = await api.post("/signup1", {
        name,
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      // setIsLoading(false);
    }
  };

  const signOut = async () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);

    router.push("/dashboard");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        signIn,
        signUp,
        signOut,
        color,
        setColor,
        showMoadl1,
        setShowModal1,
        showCategory,
        setShowCategory,
        showIcons,
        setShowIcons,
        emoji,
        setEmoji,
        newIcon,
        setNewIcon,
        newIconColor,
        setNewIconColor,
        isContainsNumber,
        isContainsSpecialCharacter,
        isContainsUpperCase,
        isLengthGreaterThan8,
        calcaluteStrength,
        passwordError,
        setPasswordError,
      }}
    >
      {children}

      {/* <Backdrop
        open={!isReady}
        sx={{
          color: "fff",
          zIndex: (theme) => {
            theme.zIndex.drawer + 1;
          },
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
