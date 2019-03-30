import React, { Component } from 'react';
import Logo from "../../../img/engage-dark-logo.svg";
import LogoDark from "../../../img/engage-light-logo.svg";
import {CSSTransition} from "react-transition-group";
import './Login.scss'

class DashboardLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light: true,
      dark: false,
      username: '',
      password: ''
    };
  }
  
  handleToggle = ()=>{
    this.setState({
      light: !this.state.light,
      dark: !this.state.dark
    })
  };
  username;
  handleUser = (e)=> {
    this.setState({
      username: e.target.value
    })
  };
  
  handlePass = (e)=> {
    this.setState({
      password: e.target.value
    })
  };
  
  handleFocus = (e)=> {
    e.target.classList.add('active')
  };
  
   componentDidMount() {
   
   }
  
  render() {
    return (
      <header className={`LoginHeader ${(this.state.light ? "light": "dark")}`}>
        <div className="LoginCard">
          <div className="LoginBox">
            <svg id="logo" height="31" viewBox="0 0 212 32" xmlns="http://www.w3.org/2000/svg">
              <g fill="none">
                <path d="M40.53 31.17h-4.9V5.338l4.9-4.454h20.487l4.9 4.454V31.17H60.57V5.338H40.53V31.17z" fill="#1D191A"/>
                <path d="M99.765.884v4.454H74.378v21.378h20.488V13.8l4.899 4.009V31.17H74.378l-4.899-4.454V5.338l4.9-4.454h25.386z" fill="#1D191A"/>
                <path d="M122.924.884L101.546 31.17h6.681l14.697-21.378 15.143 21.378h6.236L122.924.884z" fill="#1D191A"/>
                <path d="M175.924 17.809l-5.344-4.454v13.361h-20.042V5.338h25.386V.884h-25.832l-4.453 4.009v21.823l5.344 4.454h24.941V17.81z" fill="#1D191A"/>
                <path d="M4.911 1.33h25.17v4.297H0L4.911 1.33z" className="e1"/>
                <path d="M4.945 31.616h25.34v-4.502H0l4.945 4.502z" className="e1"/>
                <path d="M0 18.519h30.286v-4.502H0v4.502z" className="e1"/>
                <path d="M186.626 1.33h25.169v4.297h-30.081l4.912-4.297z" fill="#1D191A"/>
                <path d="M186.659 31.616H212v-4.502h-30.286l4.945 4.502z" fill="#1D191A"/>
                <path d="M181.714 18.519H212v-4.502h-30.286v4.502z" fill="#1D191A"/>
              </g>
            </svg>
            <h3 className="LoginTitle">Welcome Admin!</h3>
            <h4 className="LoginSubTitle">Sign into your account.</h4>
            <div className="InputBox">
              <input id="username" onFocus={this.handleFocus} onChange={this.handleUser} type="text" value={this.state.username}/>
              <label htmlFor="username">Username</label>
            </div>
            <div className="InputBox">
              <input id="password" onFocus={this.handleFocus} type="text" onChange={this.handlePass} value={this.state.password}/>
              <label htmlFor="password">Password</label>
            </div>
            <div className="InputBox text-center">
               <button className="btn">Login</button>
            </div>
            <div className="InputBox text-center">
              <svg className="toggle" onClick={this.handleToggle} height="30px" width={this.props.width} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                <g fill="none">
                  <path className="bg" d="M0 15C0 6.716 6.716 0 15 0h30c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15H15C6.716 30 0 23.284 0 15z" fill="#525252"/>
                  <circle cy="15" fill="#C4C4C4" r="15"/>
                  <circle cy="15" fill="#E9A800" fillOpacity=".62" r="10"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default DashboardLogin;
