import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class RefreshRoute extends Component {
  constructor(props){
    super(props);
    this.state={
      redirect: false
    }
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/dashboard' />
    }
  };
  
  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        redirect: true
      })
    },500)
     }
  
  render() {
    return (
      <>
        {this.renderRedirect()}
      </>
    );
  }
}
export default RefreshRoute;
