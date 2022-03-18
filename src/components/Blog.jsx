import styled from "styled-components";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card";
import Blog1 from "../img/blog_image_1.svg";
import Blog2 from "../img/bloco_image_2.svg";
import Blog3 from "../img/bloco_image_3.svg";
import Blog4 from "../img/bloco_image_4.svg";
import pessoa1 from "../img/pessoa1.svg";
import pessoa2 from "../img/pessoa2.svg";
import pessoa3 from "../img/pessoa3.svg";
import pessoa4 from "../img/pessoa4.svg";

function Blog() {
  const [move, setMove] = useState(20);
  const [returnMove, setReturnMove] = useState(0)

  const moveCardsHandler = () => {
    const item = document.getElementById("carouselContainer");
    const leftIcon = document.getElementById("left");
    item.style.transform = `translateX(-${move}%)`;
    leftIcon.style.display = "inline-block";
    setMove(move + 20);
  };

  const returnCardsHandler = () => {
    const item = document.getElementById("carouselContainer");
    const leftIcon = document.getElementById("left");
    item.style.transform = `translateX(${returnMove}%)`;
    leftIcon.style.display = "none";
    setMove(0)
  };

  return (
    <BlogContainer id="blog">
      <BlogTitle>Read Our Blog</BlogTitle>
      <BlogParapraph>
        Far far away, behind the word mountains, far from the countries
        <br />
        Vokalia and Consonantia, there live the blind texts.
      </BlogParapraph>
      <CardsContainer id="carouselContainer">
        <Card
          img={Blog1}
          title="Quick-start guide to nuts and seeds"
          profileImage={pessoa1}
          name="Kevin Ibrahim"
        />
        <Card
          img={Blog2}
          title="Nutrition: Tips for Improving Your Health"
          profileImage={pessoa2}
          name="Mike Jackson"
        />
        <Card
          img={Blog3}
          title="The top 10 benefits of eating healthy"
          profileImage={pessoa3}
          name="Bryan McGregor"
        />
        <Card
          img={Blog4}
          title="What Makes a Healthy Diet?"
          profileImage={pessoa4}
          name="Joshua"
        />
      </CardsContainer>

      <CarouselButtonLeft id="left" onClick={returnCardsHandler}>
        <FaChevronLeft />
      </CarouselButtonLeft>
      <CarouselButtonRight id="right" onClick={moveCardsHandler}>
        <FaChevronRight />
      </CarouselButtonRight>
    </BlogContainer>
  );
}

const BlogContainer = styled.section`
  background-color: #fafafc;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  overflow: hidden;
  position: relative;
`;

const BlogTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #1d164d;

  @media (max-width: 426px) {
    font-size: 28px;
  }
`;

const BlogParapraph = styled.p`
  text-align: center;
  font-family: "Muli", sans-serif;
  font-size: 16px;
  color: #9e9baf;
  padding: 15px;

  @media (max-width: 426px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const CardsContainer = styled.div`
  height: 450px;
  width: 1464px;
  display: flex;
  margin: 0 auto;
  transition: all 0.5s;
`;

const CarouselButtonRight = styled.button`
  width: 56px;
  height: 56px;
  background-color: #fafafc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 3%;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #b4b4b4;
  }
`;

const CarouselButtonLeft = styled.button`
  width: 56px;
  height: 56px;
  background-color: #fafafc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 2%;
  cursor: pointer;
  border: none;
  display: none;

  &:hover {
    background-color: #b4b4b4;
  }
`;

export default Blog;
