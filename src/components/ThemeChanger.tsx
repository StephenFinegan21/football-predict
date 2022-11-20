import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = styled.div`
  position: absolute;
  right: 20%;
  padding: 2px;
`;

const Moon = styled.div`
  color: #220080;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 1rem;
  transition: 0.3s;
`;
const Sun = styled.div`
  color: #ffe57c;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 1rem;
  transition: 0.3s;
`;

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const {  setTheme, resolvedTheme } = useTheme();

  console.log(resolvedTheme)

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
