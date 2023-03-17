import styled from "styled-components";

const LeftSection = styled.div`
  position: relative;

  align-items: center;
  height: 57px;
  width: 100px;
  margin: 3px;
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  transform: translateY(-1.5px);
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.colors.color4};

  &:hover {
    transform: translateY(-1px) scale(1.05);
    border-color: ${({ theme }) => theme.colors.color2};
  }
`;

export default LeftSection;
