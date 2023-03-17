import styled from "styled-components";

interface RightSectionProps {
  open: boolean;
}

const RightSection = styled.div<RightSectionProps>`
  position: relative;
  display: flex;
  height: 56px;
  margin: 3px;
  justify-content: space-around;
  border: none;
  border-radius: 10px;
  width: 70%;
  overflow: hidden;
  transform: translateY(-1.5px);
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    text-align: center;
    position: fixed;
    height: auto;
    /* height: calc(100vh - 85px); */
    width: 70%;
    right: 4px;
    top: 64px;
    transform: translateY(10px);
    border: 2px solid black;
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.colors.color4};
  }
`;

export default RightSection;
