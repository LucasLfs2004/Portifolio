import styled from "styled-components";

export const Header = styled.header`
  /* background-color: #001a2c; */
  border-bottom: 1px solid #002e4e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 12% 10px 12%;
  width: -webkit-fill-available;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 18px;

  a {
    text-decoration: none;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
  }
`;
