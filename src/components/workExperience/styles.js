import styled from 'styled-components';

export const Card = styled.article`
  width: calc(50% - 82px);
  border-radius: 15px;
  border-top: 3px solid #00406c;
  background: linear-gradient(165deg, #001523 40%, #001a2c 55%, #003a61 100%);
  display: flex;
  flex-direction: row;
  padding: 16px 32px;
  column-gap: 20px;
  align-items: center;
`;

export const ImgBanner = styled.img`
  max-height: 128px;
  max-width: 128px;
  object-fit: contain;
`;

export const TopLine = styled.div`
  height: 3px;
  width: 100%;
  background-color: #00406c;
`;

export const Content = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  p {
    font-size: 15px;
  }
`;

export const ButtonLearnMore = styled.div`
  border-radius: 10px;
  background-color: #003a61;
  width: 120px;
  height: 34px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
