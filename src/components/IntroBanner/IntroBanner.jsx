import React from "react";
import { Box, Typography,styled } from "@mui/material";
import Lottie from "react-lottie"
import animationData from "../../images/Password banner.json"


const BannerWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
    //background-color: gray;
`
const TextWrapper = styled(Box)`
 width: 50%;
 font-family: "Inter", sans-serif;
 padding: 61px;
`
const H2Size = styled("h2")`
    font-size: 60px;
    font-weight: 900;
    letter-spacing: 4px;

`

const SmallWords = styled(Typography)`
    font-size:20px;
    color: #818181;
    letter-spacing: 3px;

`

const LottieWrapper = styled(Box)`
 width:50%;
`





const IntroBanner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

  return (
    <BannerWrapper>

      <TextWrapper>
        <H2Size>Tap into the Inner Security</H2Size>
        <SmallWords>We are easing the burden of password storage.</SmallWords>
      </TextWrapper>

      <LottieWrapper>
      <Lottie 
	      options={defaultOptions}
        height={500}
        width={500}
  />
    
      </LottieWrapper>

    </BannerWrapper>
  );
};

export default IntroBanner;
