import React, { useState } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { API } from "../../service/api"

const Container = styled(Box)`
  height: 100vh;
  width: 100%;
  //background-color: aqua;
  display: flex;
  //align-items: center;
  justify-content: center;
`;
const SignUpLeft = styled(Box)`
  //width:50%;
  background-color: #8b2cf5;
  border-radius: 24px;
  font-family: "Inter", sans-serif;
  margin: 25px;
  height: 100%;
  flex: 2;
`;
const Contain = styled(Box)`
  margin-top: 85px;
  margin-left: 25px;
  margin-right: 25px;
`;
const H2Size = styled("h2")`
  font-size: 48px;
  font-weight: bold;
  color: white;
  line-height: 75px;
  margin-bottom: 15px;
`;
const SmallWords = styled(Typography)`
  font-size: 20px;
  color: #d0d0d0;
  letter-spacing: 3px;
  line-height: 35px;
`;

const SignUpRight = styled(Box)`
  //width: 50%;
  //background-color: aqua;
  flex: 3;
  font-family: "Inter", sans-serif;
  margin: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled(Box)`
  //background-color: coral;
  width: 90%;
  margin-left: 50px;
`;

const UpperWrapper = styled(Box)`
  margin-bottom: 20px;
`;

const FormWrapper = styled(Box)``;

const H2Size1 = styled("h2")`
  font-size: 40px;
  font-weight: bold;
  color: black;
  line-height: 75px;
`;

const SmallWords1 = styled(Typography)`
  font-size: 20px;
  color: #4f4f4f;
  line-height: 35px;
  font-weight: bold;
  & > span {
    color: #8b2cf5;
    cursor: pointer;
  }
`;

const Label = styled("label")`
  font-size: 18px;
  font-weight: 500;
  color: rgba(104, 104, 104, 1);
`;

const InputTag = styled("input")`
  outline: none;
  border-radius: 8px;
  border: solid rgba(104, 104, 104, 1) 1px;
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 1);
  height: 40px;
  margin-top: 15px;
  width: 60%;
  font-size: 16px;
  font-weight: bold;
  color: black;
  padding-left: 15px;
  letter-spacing: 1px;
`;

const AccountButton = styled(Button)`
  background-color: #8b2cf5;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 2px;
  border-radius: 10px;
  padding: 4px 25px;
  &:hover {
    background-color: #8b2cf5;
  }
`;

const FormComponentWrapper = styled(Box)`
  margin-bottom: 30px;
`;

const loginInitialValues = {
    email:"",
    password:""
}

const signupIntialValues  = {
    username:"",
    email:"",
    password:""
}


const LoginForm = () => {
  const [account, toggleAccount] = useState("signup");
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupIntialValues);
  
 

  const onValueChange = (e) => {
    setLogin({...login,[e.target.name]:e.target.value})
    console.log(login);
  }

  const onInputChange = (e) => {
    setSignup({...signup,[e.target.name]:e.target.value})
    console.log(signup);
    
  }

  const signupUser = async () => {
    let response = await API.userSignup(signup);

    return response
    
  }

  
  return (
    <Container>
      <SignUpLeft>
        <Contain>
          <H2Size>Start your journey with us</H2Size>
          <SmallWords>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            eiusmod tempor incididunt ut labore .
          </SmallWords>
        </Contain>
      </SignUpLeft>
      {account === "login" ? (
        <SignUpRight>
          <Wrapper>
            <UpperWrapper>
              <H2Size1>Login</H2Size1>
              <SmallWords1>
                Create an account? <span onClick={() => toggleAccount("signUp")}>Sign Up</span>
              </SmallWords1>
            </UpperWrapper>
            <FormWrapper>

              <FormComponentWrapper>
                <Label>Email</Label>
                <br />
                <InputTag type="email" required name="email" value={login.email} onChange={(e)=>onValueChange(e)} />
              </FormComponentWrapper>

              <FormComponentWrapper>
                <Label>Password</Label>
                <br />
                <InputTag
                  style={{ letterSpacing: "4px" }}
                  type="text"
                  required
                  name="password"
                   value={login.password}
                    onChange={(e)=>onValueChange(e)}
                />
              </FormComponentWrapper>

              <AccountButton variant="contained">Login</AccountButton>
            </FormWrapper>
          </Wrapper>
        </SignUpRight>
      ) : (
        <SignUpRight>
          <Wrapper>
            <UpperWrapper>
              <H2Size1>Sign Up</H2Size1>
              <SmallWords1>
                Have an account? <span onClick={()=>toggleAccount("login")}>Login</span>
              </SmallWords1>
            </UpperWrapper>

            <FormWrapper>
              <FormComponentWrapper>
                <Label>Email</Label>
                <br />
                <InputTag type="email" required name="email" value={signup.email} onChange={(e)=>onInputChange(e)} />
              </FormComponentWrapper>

              <FormComponentWrapper>
                <Label>Name</Label>
                <br />
                <InputTag type="text" required name="username" value={signup.username} onChange={(e)=>onInputChange(e)} />
              </FormComponentWrapper>

              <FormComponentWrapper>
                <Label>Password</Label>
                <br />
                <InputTag
                  style={{ letterSpacing: "4px" }}
                  type="password"
                  required
                  name="password"
                  value={signup.password}
                   onChange={(e)=>onInputChange(e)}

                />
              </FormComponentWrapper>

              <AccountButton variant="contained" onClick={() => signupUser()}>Create account</AccountButton>
            </FormWrapper>
          </Wrapper>
        </SignUpRight>
      )}
    </Container>
  );
};

export default LoginForm;
