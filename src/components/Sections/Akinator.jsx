import React, { useEffect } from "react";
import styled from "styled-components";
// Components
import Board from "../boards/board";
import '../boards/style.css';
import TopNavbar from "./Pages/TopNavbar_pages";
import Footer from "./Footer"

export default function Akinator() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopNavbar />
      <div id="top"></div>
      <Wrapper id="Akinator">
        <div className="whiteBg" style={{ padding: "90px 0" }}>
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Akinator Player Leaderboard</h1>
              <p className="font13">
                We have player leaderboard and model leaderboard for Akinator game.
              </p>
            </HeaderInfo>
            <Board />
          </div>
        </div>
      </Wrapper>
      <Wrapper id="Akinator">
        <div className="lightBg" style={{ padding: "90px 0" }}>
          <div className="container">
            <Board />
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
