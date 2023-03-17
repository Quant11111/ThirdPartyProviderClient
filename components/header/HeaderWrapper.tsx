import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  position: fixed;
  justify-content: space-between;
  width: calc(100% - 14px);
  height: 64px;
  margin: 7px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.colors.color4};
  border-radius: 10px;
  align-items: center;
`;

export default HeaderWrapper;
