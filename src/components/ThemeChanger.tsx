import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = styled.div`
  position: absolute;
  right: 2%;
  padding: 2px;

  @media (min-width: 800px) {
    right: 20%;
  }
`;

const Moon = styled.div`
  color: #343336;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 1rem;
  transition: 0.3s;
`;
const Sun = styled.div`
  color: #f8f7f5;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 1rem;
  transition: 0.3s;
`;

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const {  setTheme, resolvedTheme } = useTheme();


  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeToggle>
      {resolvedTheme === "light" && (
        <Moon>
          <FaMoon onClick={() => setTheme("dark")}></FaMoon>
        </Moon>
      )}
      {resolvedTheme === "dark" && (
        <Sun>
          <FaSun onClick={() => setTheme("light")}></FaSun>
        </Sun>
      )}
    </ThemeToggle>
  );
};

export default ThemeChanger;
