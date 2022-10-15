import React,{useState} from "react";
import { Box, styled } from "@mui/material";
import Sorting from "../../images/Categories/Sorting.svg";
import Logout from "../../images/Categories/Logout.svg";

import { categories } from "../../constants/data";
import './Categorie.css'

const CategorieWrapper = styled(Box)`
  flex: 1;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 30px;
  font-family: "Inter", sans-serif;
  border: 1px solid gray;
  position: sticky;
  left: 0;
  top: 0px;
  height: 100vh;
  background-color: white;
`;
const UserProfile = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 22px;
  padding-left: 0px;
`;
const ProfileImg = styled("img")`
  border-radius: 50%;
  border: 2px solid #8b2cf5;
  height: 70px;
  width: 70px;
`;
const UserInfo = styled(Box)`
  & > h6 {
    font-weight: 900;
    color: rgba(129, 129, 129, 1);
    letter-spacing: 1px;
    font-size: 15px;
  }
  & > h2 {
    color: black;
    font-weight: 900;
    font-size: 25px;
    margin-top: 5px;
  }
`;

const CategorieContainer = styled(Box)``;

const CatWrap = styled(Box)`
  margin: 25px 0 ;
  display: flex;
  align-items: center;
  padding-left: 25px;
  //justify-content: space-evenly;
  & > img {
    height: auto;
    width: 60px;
  }
  & > h1 {
    font-weight: 400;
    font-size: 22px;
    padding-left: 25px;
  }
`;
const ItemWrap = styled(Box)`
    text-align: center;
    //padding-left: 28px;
    //gap: 2rem;


`;
const Item = styled("li")`
  height: 2rem;
    list-style: none;
    display: flex;
    align-items: center;
    //justify-content: space-evenly;
    margin-bottom: 5px;
    padding: 15px;
    gap: 2.5rem;
    //background-color: violet;


    &>h3{
        font-weight: 400;
        cursor: pointer;
        color: black;
        font-size: 18px;
        
    }

`;

const LogoutWrap = styled(Box)`
    color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    /*height: 2.5rem;*/
    margin: 25px 0;
    margin-left: 25px;
    
    &>img{
        width: 40px;
        height: 30px;
        cursor: pointer;
    }
`;

const Categorie = () => {
  const [selected, setSelected] = useState(4)

  return (
    <CategorieWrapper>
      <UserProfile>
        <ProfileImg
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
          alt="User Avatar"
        />
        <UserInfo>
          <h6>Welcome</h6>
          <h2>John Adam</h2>
        </UserInfo>
      </UserProfile>
      <hr style={{
        width:"90%",
        margin:"0 auto",
      }} />

      <CategorieContainer>
        <CatWrap>
          <img src={Sorting} alt="Categories" />
          <h1>Categories</h1>
        </CatWrap>

        <ItemWrap>
          {categories.map((cat,index) => (
            <Item className={selected === index ? "menuItem active" : "menuItem"} key={cat.id} onClick={() => setSelected(index)} >
                <img src={cat.image} alt={cat.image}/>
                <h3>{cat.type}</h3>
            </Item>
          ))}
        </ItemWrap>

        

      </CategorieContainer>

      <hr style={{
        width:"90%",
        margin:"0 auto",
      }} />
        <LogoutWrap>
          <img src={Logout} alt="Logout" />
        </LogoutWrap>
      
    </CategorieWrapper>
  );
};

export default Categorie;
