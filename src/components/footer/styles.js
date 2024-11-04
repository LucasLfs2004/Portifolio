import styled from 'styled-components';

export const Footer = styled.footer`
  max-width: 1160px;
  color: #fff;
  font-family: 'Preahvihear', sans-serif;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 32px;

  p {
    max-width: 600px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  margin-top: 26px;

  img {
    width: 24px;
  }
`;
