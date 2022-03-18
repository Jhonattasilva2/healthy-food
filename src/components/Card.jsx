import styled from "styled-components";



function Card({ img, title, profileImage, name }) {
  return (
    <CardDiv>
      <CardImg src={img} alt="imagem" />
      <CardTitle>{title}</CardTitle>
      <CardProfileInfo>
        <ProfileImg src={profileImage} alt="Person" />
        <ProfileName>{name}</ProfileName>
      </CardProfileInfo>
    </CardDiv>
  );
}

const CardDiv = styled.div`
  max-width: 348px;
  max-height: 450px;
  margin: 15px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 5px 5px 10px #9e9baf;
  position: relative;

  @media (max-width: 426px) {
    max-width: 300px;
    max-height: 400px;
  }

  @media (max-width: 366px) {
    max-width: 230px;
    max-height: 300px;
  }
`;

const CardImg = styled.img`
@media (max-width: 426px) {
  max-width: 300px;
}

@media (max-width: 366px) {
max-width: 230px;
}

`;

const CardTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #1d164d;
  display: inline-block;
  padding-left: 20px;
  padding-top: 20px;

  &:nth-child(1) {
    width: 234px;
  }
  &:nth-child(2) {
    width: 300px;
  }
  &:nth-child(3) {
    width: 253px;
  }
  &:nth-child(4) {
    width: 184px;
  }

  @media (max-width: 366px) {
    font-size: 16px;
    max-width: 200px;
  }
`;

const CardProfileInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: absolute;
  bottom: 5%;
  max-width: 100%;
`;

const ProfileImg = styled.img`
  width: 52px;
  height: 52px;

  @media (max-width: 366px) {
    width: 43px;
    height: 43px;
  }
`;

const ProfileName = styled.span`
  font-family: "Muli", sans-serif;
  font-size: 100%;
  color: #9e9baf;
  margin-left: 10px;
`;

export default Card;
