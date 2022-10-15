import React from 'react'
import { Box, styled } from "@mui/material"
import Categorie from './Categorie'
import Post from './Post/Post'

const HomePageWrapper = styled(Box)`
    margin-top: 6px;
    height: 150vh;
    display: flex;
    justify-content: center;
    background-color:  rgb(242 240 255);
`


const Home = () => {
  return (
    <HomePageWrapper>
        <Categorie/>
        <Post/>
    </HomePageWrapper>
  )
}

export default Home