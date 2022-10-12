import React from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Insta from "../../images/Insta.svg";
import Twitter from "../../images/Twitter.svg";
import LinkedIn from "../../images/Linked.svg";
import Username from "../../images/Username.svg";
import Logout from "../../images/Logout Rounded.svg"

const Component = styled(AppBar)`
  background-color: white;
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
  position: static;
  border-bottom-left-radius:13px ;
  border-bottom-right-radius:13px ;
  height: 65px;


`;

const Image = styled("img")`
  height: 35px;
  cursor: pointer;
`;
const Container = styled(Toolbar)`
  display: flex;
  align-items: center;
`;

const SocialMediaContainer = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const LogoContainer = styled(Box)`
  flex: 3;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 700;
`;

const PasswordSpan = styled("span")`
  color: #8b2cf5;
`;
const SaveSpan = styled("span")`
  color: black;
`;

//

const Header = () => {
  return (
    <Component>
      <Container>
        <SocialMediaContainer>
          <a href="https://www.instagram.com/_aryan.jagadale_/" target="_blank" rel="noreferrer">
            <Image src={Insta} alt="Instagram" />
          </a>
          <a href="https://twitter.com/Aaryan30757183" target="_blank" rel="noreferrer">
            <Image src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/aryan-jagadale-0a0a69203/" target="_blank" rel="noreferrer">
            <Image src={LinkedIn} alt="LinkedIn" />
          </a>
        </SocialMediaContainer>

        <LogoContainer>
          <PasswordSpan>password</PasswordSpan>
          <SaveSpan>Save</SaveSpan>
        </LogoContainer>

        <SocialMediaContainer>
          
          <a href="https://twitter.com/Aaryan30757183" target="_blank" rel="noreferrer">
            <Image src={Username} alt="Username" />
          </a>
          <a href="https://www.linkedin.com/in/aryan-jagadale-0a0a69203/" target="_blank" rel="noreferrer">
            <Image src={Logout} alt="Logout" />
          </a>
        </SocialMediaContainer>
      </Container>
    </Component>
  );
};

export default Header;
