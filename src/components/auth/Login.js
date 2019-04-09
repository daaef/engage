import React, { Component } from 'react';
import { connect } from "react-redux";
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
      loading: true,
      login: false
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
  
    this.setState({
      login: true
    });
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
                           required
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
                           required
                    />
                    <label className="form-label pass" htmlFor="password">Password</label>
                  </div>
                  <div className="margin-bottom--sm">
                    <button className={`btn btn--success btn--md btn--full-width ${this.state.login && 'btn--state-b'}`} onClick={this.handleLogin}>
                      <span className="btn__content-a">
                        Login
                      </span>
                      <span className="btn__content-b icon-text">
                        <span>Logging in</span>
                        <svg className="icon icon--is-spinning" aria-hidden="true" viewBox="0 0 16 16">
                          <g strokeWidth="1" fill="currentColor" stroke="currentColor">
                            <path d="M.5,8a7.5,7.5,0,1,1,1.91,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                        </svg>
                      </span>
                    </button>
                   {/* <button className="btn btn--primary btn--state-b">
                      <span className="btn__content-a">
                        Click me
                      </span>
                      <span className="btn__content-b icon-text">
                        <svg className="icon icon--is-spinning" aria-hidden="true" viewBox="0 0 16 16">
                          <g strokeWidth="1" fill="currentColor" stroke="currentColor">
                            <path d="M.5,8a7.5,7.5,0,1,1,1.91,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                        </svg>
                        <span>Click me</span>
                      </span>
                    </button>*/}
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
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
