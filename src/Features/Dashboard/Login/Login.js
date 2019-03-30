import React, { Component } from 'react';
import styled, {keyframes} from "styled-components";
import Logo from "../../../img/engage-dark-logo.svg";
import LogoDark from "../../../img/engage-light-logo.svg";
import {CSSTransition} from "react-transition-group";

class DashboardLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light: true,
      dark: false,
      card: '',
      title: '',
      subtitle: '',
      mainbg: ''
    };
  }
  
  handleToggle = ()=>{
    this.setState({
      light: !this.state.light,
      dark: !this.state.dark
    })
  };
   componentDidMount() {
     switch (this.state.light) {
       case true:
         this.setState({
           card: '#EEECEC',
           title: '#6B6B6B',
           subtitle: '#B0B0B0',
           mainbg: '#ffffff'
         });
         break;
       case false:
         this.setState({
           card: '#434242',
           title: '#AEAEAE',
           subtitle: '#6F6F6F',
           mainbg: '#1D1D1D'
         });
         break;
       default:
         this.setState({
           card: '#EEECEC',
           title: '#6B6B6B',
           subtitle: '#B0B0B0',
           mainbg: '#ffffff'
         })
     }
   }
  
  render() {
    const toggleIn = keyframes`
        to {
          cx: 15;
        }
      `;
    const toggleOut = keyframes`
        to {
          cx: 45;
        }
      `;
    const LoginHeader = styled.header`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background: ${props => props.bg};
`;
    const LoginCard = styled.div`
    min-height: 60%;
    width: 40%;
    background: ${props => props.bg};
    border-radius: 25px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
        width: 70%;
    }
    @media (max-width: 500px) {
        width: 100%;
        background: transparent;
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
   `;
    const LoginTitle = styled.h3`
    width: 100%;
    margin-top: 20px;
    font-family: Roboto,sans-serif;
    font-style: normal;
    color: ${props => props.color};
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
    color: ${props => props.color};
`;
    const InputBox = styled.div`
    width: 65%;
    text-align: ${props => props.align};
    input{
      border: none;
      outline: none;
      border-bottom: 3px solid ${props => props.color};
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
      color: ${props => props.color};
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
    const Toggle = styled.svg`
      circle{
        cx:15;
        animation: ${props => props.circlePos} .05s linear forwards;
      }
`;
    return (
      <LoginHeader bg={(this.state.light ? "#ffffff": "#1D1D1D")}>
        <LoginCard bg={(this.state.light ? "#EEECEC": "#434242")}>
          <LoginBox>
            <CSSTransition
              in={this.state.light}
              timeout={450}
              classNames="vanish"
              unmountOnExit
            >
            <img src={Logo} alt=""/>
            </CSSTransition>
            <CSSTransition
              in={this.state.dark}
              timeout={450}
              classNames="vanish"
              unmountOnExit
            >
            <img src={LogoDark} alt=""/>
            </CSSTransition>
            <LoginTitle color={(this.state.light ? "#6B6B6B": "#AEAEAE")}>Welcome Admin!</LoginTitle>
            <LoginSubTitle color={(this.state.light ? "#B0B0B0": "#6F6F6F")}>Sign into your account.</LoginSubTitle>
            <InputBox color={(this.state.light ? "#000000": "#B0B0B0")}>
              <input id="username" type="text"/>
              <label htmlFor="username">Username</label>
            </InputBox>
            <InputBox color={(this.state.light ? "#000000": "#B0B0B0")}>
              <input id="password" type="text"/>
              <label htmlFor="password">Password</label>
            </InputBox>
            <InputBox align="center">
               <Button bg="#39A564" color="#ffffff">Login</Button>
            </InputBox>
            <InputBox align="center">
              <Toggle circlePos={(this.state.light ? toggleIn : toggleOut)} onClick={this.handleToggle} height="30px" width={this.props.width} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                <g fill="none">
                  <path d="M0 15C0 6.716 6.716 0 15 0h30c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15H15C6.716 30 0 23.284 0 15z" fill="#525252"/>
                  <circle cy="15" fill="#C4C4C4" r="15"/>
                  <circle cy="15" fill="#E9A800" fillOpacity=".62" r="10"/>
                </g>
              </Toggle>
            </InputBox>
          </LoginBox>
        </LoginCard>
      </LoginHeader>
    );
  }
}

export default DashboardLogin;
