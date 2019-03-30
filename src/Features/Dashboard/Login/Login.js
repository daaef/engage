import React, { Component } from 'react';
import styled from "styled-components";
import Logo from "../../../img/engage-dark-logo.svg";

class DashboardLogin extends Component {
  
  render() {
    const LoginHeader = styled.header`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
        height: 820px;
    }
`;
    const LoginCard = styled.div`
    height: 60%;
    width: 40%;
    background: #EEECEC;
    border-radius: 25px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
        height: 820px;
    }
`;
    const LoginBox= styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    //align-items: baseline;
    img{
    width: 212px;
    margin-top: 20px;
    }
    div{
    margin-top: 30px;
    }
    @media (max-width: 640px) {
        height: 820px;
    }
`;
    const LoginTitle = styled.h3`
    width: 100%;
    margin-top: 20px;
    font-family: Roboto,sans-serif;
    font-style: normal;
    color: #6B6B6B;
    font-weight: normal;
    font-size: 17px;
    line-height: normal;
    text-align: center;
`;
    const LoginSubTitle = styled.h4`
    width: 100%;
    margin-top: 5px;
    font-family: Roboto,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: normal;
    text-align: center;
    color: #B0B0B0;
`;
    const InputBox = styled.div`
    width: 65%;
    text-align: ${props => props.align};
    input{
      border: none;
      outline: none;
      border-bottom: 3px solid black;
      background: transparent;
      &:focus ~ label{
        transform: translateY(-100%);
      }
    }
    label{
      position: absolute;
      top: 0;
      left: 0;
      transition: .4s;
    }
    label,input{
      width: 100%;
    }
`;
    const Button = styled.button`
    background: ${props => props.bg};
    color: ${props => props.color};
    height: 30px;
    width: 170px;
    text-align: center;
    line-height: 30px;
    border-radius: 20px;
    border: none;
    outline: none;
    top: 0;
    box-shadow: 0 10px 10px -5px grey;
    transition: .4s;
    &:hover{
      top: -3px;
      box-shadow: 0 15px 10px -10px grey;
    }
    &:active{
      top: 1px;
      box-shadow: 0 5px 10px grey;
    }
`;
    return (
      <LoginHeader>
        <LoginCard>
          <LoginBox>
            <img src={Logo} alt=""/>
            <LoginTitle>Welcome Admin!</LoginTitle>
            <LoginSubTitle>Sign into your account.</LoginSubTitle>
            <InputBox>
              <input id="username" type="text"/>
              <label htmlFor="username">Username</label>
            </InputBox>
            <InputBox>
              <input id="password" type="text"/>
              <label htmlFor="password">Password</label>
            </InputBox>
            <InputBox align="center">
               <Button bg="#39A564" color="#ffffff">Login</Button>
            </InputBox>
          </LoginBox>
        </LoginCard>
      </LoginHeader>
    );
  }
}

export default DashboardLogin;
