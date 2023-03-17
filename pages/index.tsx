import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import darkTheme from "../themes/darkTheme";
import lightTheme from "../themes/lightTheme";
import { useState } from "react";
import GeneralWrapper from "../components/LadingPage/GeneralWrapper";
import Header from "../components/header/Header";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.color3};
`;

export default function Home() {
  const [theme, setTheme] = useState("light");
  const isLightTheme = theme === "light";

  const toogleTheme = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GeneralWrapper>
        <Header />
      </GeneralWrapper>
    </ThemeProvider>
  );
}
