import {Box ,styled } from '@mui/material'
import React from 'react'
import SinglePost from './SinglePost'

const PostWrapper = styled(Box)`
  flex: 3;
  //background-color: red;
  //background-image: url("https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80");
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 1rem 2vw;
  
  margin-top: 4rem;

  padding: 0px;
  list-style-type: none;


`

const Post = () => {
  return (
    <PostWrapper>
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>


    </PostWrapper>
  )
}

export default Post