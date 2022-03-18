import styled from "styled-components";



function Recipe({ img, title, title2 }) {
  return (
    <RecipeDiv>
      <ImgContainer>
        <RecipeImg src={img} alt="food" />
      </ImgContainer>
      <InfoContainer>
        <RecipeName>
          {title} <br /> {title2}
        </RecipeName>
        <RecipeButton>See Recipe</RecipeButton>
      </InfoContainer>
    </RecipeDiv>
  );
}

const RecipeDiv = styled.div`
  display: flex;
  background-color: #fff;
  margin: 16px;
  border-radius: 5px;
  width: 530px;
  height: 225px;
  box-shadow: 5px 5px 10px #9e9baf;

  @media (max-width: 1115px) {
    width: 400px;
    height: 200px;
  }

  @media (max-width: 865px) {
    width: 300px;
    height: 150px;
  }

  @media (max-width: 383px) {
    width: 250px;
    height: 125px;
  }
`;

const ImgContainer = styled.div`
 @media (max-width: 1115px) {
  max-width: 400px;
 }

 @media (max-width: 865px) {
   max-width: 300px;
 }

 @media (max-width: 383px) {
   max-width: 250px;
 }
`;

const RecipeImg = styled.img`
@media (max-width: 1115px) {
  max-width: 400px;
    max-height: 200px;
}

@media (max-width: 865px) {
  max-width: 300px;
  max-height: 150px;
}

@media (max-width: 383px) {
  max-width: 250px;
  max-height: 125px;
}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const RecipeName = styled.h2`
  font-family: "Montserrat", sans-serif;
  color: #1d164d;
  font-size: 24px;
  font-weight: bold;
  margin-left: 25px;

  @media (max-width: 1115px) {
    font-size: 18px;
  }

  @media (max-width: 865px) {
    font-size: 15px;
  }

  @media (max-width: 383px) {
    font-size: 12px;
  }
`;

const RecipeButton = styled.button`
  border: none;
  font-family: "Muli", sans-serif;
  padding: 10px 15px;
  background-color: #badc58;
  color: #fff;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 25px;
  cursor: pointer;

  &:hover {
    background-color: #abca4f;
  }

  @media (max-width: 865px) {
    padding: 5px 10px;
    margin: 5px auto;
    font-size: 15px;
  }

  @media (max-width: 383px) {
    padding: 3px 6px;
    font-size: 12px;
  }
`;

export default Recipe;
