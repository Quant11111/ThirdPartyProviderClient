import styled from "styled-components";

const GeneralWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: block;
  background-color: ${({ theme }) => theme.colors.color1};
  overflow: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export default GeneralWrapper;
