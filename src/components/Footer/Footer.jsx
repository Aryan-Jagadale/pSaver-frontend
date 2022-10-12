import React from "react";
import { Box, styled, Typography, Button } from "@mui/material";
//import Wavy from "../../images/Vector.svg";
import Send from "../../images/fluent_send.svg";

const FooterWrapper = styled(Box)`
  margin-top: 100px;
  font-family: "Inter", sans-serif;
  height: 65vh;
`;

const ContentWrapper = styled(Box)`
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

const H2Size = styled(Box)`
  font-weight: bold;
  font-size: 60px;
  color: #8b2cf5;
  margin-bottom: 10px;
`;
const Para = styled(Typography)`
  word-wrap: break-word;
  white-space: nowrap;
`;

const EmailWrapper = styled(Box)`
  width: 90%;
  margin: 50px auto;
  text-align: center;
  // background-color: aqua;
`;
const EmailBorder = styled(Box)`
  //border: solid 1px black;
  //border-radius: 8px;
  // background-color: #a868ef;
`;
const SendButton = styled(Button)`
  background-color: #8b2cf5;
  color: white;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 4px 25px;
  height: 40px;

  &:hover {
    background-color: #8b2cf5;
  }
`;

const InputTag = styled("input")`
  outline: none;
  border-radius: 8px;
  height: 40px;
  width: 40%;
  font-size: 16px;
  font-weight: bold;
  color: black;
  padding-left: 15px;
  letter-spacing: 1px;
  margin-right: 10px;
`;

const SendImg = styled("img")`
  margin: 10px;
  height: auto;
  width: 25px;
`;

const Line = styled("hr")`
  width: 95%;
  margin: 0 auto;
  margin-bottom: 55px;
`;

const LogoContainer = styled(Box)`
  font-size: 30px;
  display: flex;
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
const FooterEnd = styled(Box)`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
`

const SmallContainer = styled(Box)`


`

const Footer = () => {
  return (
    <FooterWrapper>
      <Line />

      <Box>
        <ContentWrapper>
          <H2Size>Get us to contact you</H2Size>
          <Para>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis{" "}
          </Para>
        </ContentWrapper>

        <EmailWrapper>
          <EmailBorder>
            <InputTag placeholder="Email" name="email" type="email" />
            <SendButton>
              Send <SendImg src={Send} alt="send-click" />
            </SendButton>
          </EmailBorder>
        </EmailWrapper>
      </Box>

      <FooterEnd>
        <LogoContainer>
          <PasswordSpan>password</PasswordSpan>
          <SaveSpan>Save</SaveSpan>
        </LogoContainer>

        <SmallContainer>
          <span>Privacy & Cookie Policy | Terms & Conditions</span>
        </SmallContainer>

      </FooterEnd>
    </FooterWrapper>
  );
};

export default Footer;
