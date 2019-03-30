import React, { Component } from 'react';
import engageLogo from './img/engage-dark-logo.svg';
import './App.scss';
import { CSSTransition } from "react-transition-group"
import AppLayout from "./AppLayout";
class Loader extends Component {

  render() {
    return (
      <div className="loader">
        <img src={engageLogo} className="logo" alt="logo"/>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount()
  {
    setTimeout(()=>{
      this.setState({
        loading:false
      })
    },1000)
  }
    render() {
    const { loading} = this.state;
    return (
    <>
      <CSSTransition
        in={loading}
        timeout={350}
        classNames="vanish"
        unmountOnExit
      >
       <Loader/>
      </CSSTransition>
  
      <CSSTransition
        in={!loading}
        timeout={400}
        classNames="vanish"
        unmountOnExit
      >
       <AppLayout/>
      </CSSTransition>
    </>
    );
  }
}

export default App;
