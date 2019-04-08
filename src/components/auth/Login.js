import React, { Component } from 'react';
import { connect } from "react-redux";
import { mode_dark,mode_light } from "../../store/actions/toggle_dark";
import {Switch} from "../common/Switch";
import {Logo} from "../svgs/Logo";
import {Loading} from "../common/Loader";
import {loginUser, logoutUser} from "../../actions/authActions";
import store from "../../store";
import {startAction} from "../../store/actions/start";
import {stopAction} from "../../store/actions/stop";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      loading: true
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(e) {
    e.preventDefault();
  
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    
    store.dispatch(loginUser(userData));
    
  }
  
  onActive(e) {
    e.target.classList.add('active');
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  componentDidMount() {
    setTimeout(
    this.props.stopAction
    , 1500);
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    console.log()
  }
  
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  render() {
    return (
      <>
          {(this.props.loading.loading) ? <Loading/> : ""}
            <header id="login">
              <div className="form--holder">
                <form className="login-form" onSubmit={this.onSubmit}>
                  <div className="logo">
                    <Logo width={212} height={26}/>
                    <h4>Welcome Admin!</h4>
                    <h5>Sign into your account.</h5>
                  </div>
                  <div className="margin-bottom--md">
                    <input className="form-control"
                           type="email"
                           id="email"
                           name="email"
                           value={this.state.email}
                           onChange={this.onChange}
                           onFocus={this.onActive}
                    />
                    <label className="form-label mail" htmlFor="email">Email</label>
                  </div>
                  <div className="password js-password margin-bottom--lg">
                    <input className="form-control password__input js-password__input"
                           type="password"
                           id="password"
                           name="password"
                           value={this.state.password}
                           onChange={this.onChange}
                           onFocus={this.onActive}
                    />
                    <label className="form-label pass" htmlFor="password">Password</label>
                  </div>
          
                  <div className="margin-bottom--sm">
                    <button className="btn btn--success btn--md btn--full-width">Login</button>
                  </div>
                  <div className="switch--holder">
                    <Switch theme={this.props}/>
                  </div>
                </form>
              </div>
            </header>
      </>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  loading: state.loading,
  light: state.light
});

const mapDispatchToProps = dispatch => ({
  modeDark: () => dispatch(mode_dark),
  modeLight: () => dispatch(mode_light),
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
