import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import Logo from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <Logo darkMode={true}/>
              
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Game Arena
              </h1>
            </Link>
            <StyleP className="whiteColor font16">
              © {getCurrentYear()} - <span className="purpleColor font16">Game Arena</span> All Right Reserved
            </StyleP>

            <Link className="whiteColor animate pointer font16" to="top" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 200px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 500px) {
    margin: 20px 0;
  }
`;