import styled from "styled-components";

const NavButton = styled.button`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.font1};
  height: calc(100% - 8px);
  border: none;
  margin: 4px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  transition: 0.3s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors.color2};
    color: ${({ theme }) => theme.colors.color2};
    cursor: pointer;
  }
`;

export default NavButton;
