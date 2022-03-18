import styled from "styled-components";
import Recipe from "./Recipe";
import Broccoli from "../img/comida_1.svg";
import Burguer from "../img/comida_2.svg";
import Veggie from "../img/comida_3.svg";
import Cherry from "../img/comida_4.svg";

function Recipes() {
  return (
    <RecipesContainer id="recipes">
      <RecipesTitle>Our Best Recipes</RecipesTitle>
      <RecipesParagraph>
        Far far away, behind the word mountains, far from the countries <br />
        Vokalia and Consonantia, there live the blind texts.
      </RecipesParagraph>
      <IndividualRecipes>
        <Recipe img={Broccoli} title="Broccoli Salad" title2="with Bacon" />
        <Recipe img={Burguer} title="Classic Beef" title2="Burguers" />
        <Recipe img={Veggie} title="Classic Potato" title2="Salad" />
        <Recipe img={Cherry} title="Cherry Cobbler" title2="on the Grill" />
      </IndividualRecipes>
    </RecipesContainer>
  );
}

const RecipesContainer = styled.div`
  background-color: #fafafc;
  width: 100vw;
  height: 100vh;

  @media (max-width: 656px) {
    height: 900px;
  }
`;
const RecipesTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #1d164d;
  text-align: center;
  padding-top: 1rem;

  @media (max-width: 656px) {
    font-size: 28px;
  }
`;

const RecipesParagraph = styled.p`
  font-family: "Muli", sans-serif;
  color: #9e9baf;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 1rem;

  @media (max-width: 656px) {
    font-size: 14px;
  }

  @media (max-width: 383px) {
    font-size: 12px;
  }
`;

const IndividualRecipes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: 15px;
`;
export default Recipes;
