import React, { useEffect } from "react";
import styled from "styled-components";
import '../boards/style.css';
import TopNavbar from "./Pages/TopNavbar_pages";
import Footer from "./Footer";
import Image from "../../assets/img/bgs/b4.jpg";

export default function OurMission() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopNavbar />
      <div id="top"></div>
      <Wrapper id="OurMission">
        <div className="whiteBg" style={{ padding: "90px 0" }}>
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Games Overview</h1>
              <TextContainer>
                <ul className="font14">
                    <li><strong>Akinator (Deductive and Multi-hop Reasoning) :</strong> 
                    <br />
                    Players challenge the AI by having it guess objects based on a series of yes/no questions. The AI demonstrates deductive reasoning by deriving specific conclusions from general premises, while multi-hop reasoning is showcased as it connects sequential information to narrow down the possibilities to the correct answer. This controlled setting evaluates the AI's ability to formulate and refine hypotheses over multiple rounds.</li>
                </ul>
              </TextContainer>
              <TextContainer>
                <ul className="font14">
                    <li><strong>Taboo (Abductive and Multi-hop Reasoning):</strong>
                    <br />
                    The AI utilizes abductive reasoning to generate hypotheses from fragmented clues provided by the player, aiming to guess a secret word without directly mentioning it. The game tests the AI's ability to infer under conditions of uncertainty and ambiguity, employing multi-hop reasoning to piece together information from the player's prompts. This game is a test of the AI's capacity to handle incomplete information and still arrive at the most probable conclusion.</li>
                </ul>
            </TextContainer>
              <TextContainer>
                <ul className="font14">
                    <li><strong>Bluffing (Inductive and Multi-hop Reasoning):</strong> 
                    <br />
                    The Bluffing game challenges the AI's inductive reasoning by having it determine the truthfulness of statements made by players based on observed responses. The AI uses multi-hop reasoning to connect these observations and formulate a logical conclusion about the player's honesty. This game assesses the AI's ability to detect deception and its strategic questioning prowess, which are crucial for understanding and responding to human interactions in realistic scenarios.</li>
                </ul>
              </TextContainer>
            
            </HeaderInfo>
          </div>
        </div>
        <ImageWrapper>
            <Img1 className="radius8" src={Image} alt="Game Arena"/>
        </ImageWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  text-align: center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const TextContainer = styled.div`
  width: 60%;  // Sets the width to 50% of the parent container
  margin: 0 auto; // Centers the container horizontally
  padding: 20px; // Adds padding inside the container for spacing around the text
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 9;
  width: 100%;
`;

const Img1 = styled.img`
  width: 600px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 50px;
`;