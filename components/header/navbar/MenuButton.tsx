import styled from "styled-components";

const MenuButton = styled.button`
  display: none;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  width: 57px;
  height: 57px;
  margin: 3px;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  transform: translateY(-1.5px);
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  div {
    width: 30px;
    border: 2px solid ${({ theme }) => theme.colors.black};
  }
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateY(-1px) scale(1.05);
    background-color: ${({ theme }) => theme.colors.color2};
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export default MenuButton;
