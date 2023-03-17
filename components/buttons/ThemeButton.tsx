import styled from "styled-components";

const ThemeButton = styled.button`
  margin: 0.4rem;
  width: 30%;
  max-width: 250px;

  background-color: ${({ theme }) => theme.colors.color2};
  color: ${({ theme }) => theme.colors.color4};
  border-radius: 15px;
  border-color: ${({ theme }) => theme.colors.color4};
  font-family: "Times New Roman" Times, sans-serif;
  font-size: calc(1rem + 1vw);
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.color3};
    cursor: pointer;
  }
`;

export default ThemeButton;
