import React, { Component } from 'react';
import {Logo} from "../svgs/Logo";
import avatar from "../../assets/img/cd-hero-background.jpg"
import Switch from "../common/Switch";
import {connect} from "react-redux";
import Util from "../../assets/js/util"
import store from "../../store";
import {logoutUser} from "../../actions/authActions";
import {startAction} from "../../store/actions/start";
import {stopAction} from "../../store/actions/stop";

class Navbar extends Component {
  dropIcon;
  
  componentDidMount() {
    console.log(this.props);
  
    this.dropdown = document.querySelectorAll('.dropIcon').forEach((dropdown)=>{
      console.dir(dropdown);
      dropdown.addEventListener('click', ()=>{
        dropdown.nextSibling.classList.toggle('drop')
      })
    });
    /*Header Code*/
    (function() {
      var mainHeader = document.getElementsByClassName('js-main-header')[0];
      if( mainHeader ) {
        var trigger = mainHeader.getElementsByClassName('js-main-header__nav-trigger')[0],
          nav = mainHeader.getElementsByClassName('js-main-header__nav')[0];
        //detect click on nav trigger
        trigger.addEventListener("click", function(event) {
          event.preventDefault();
          var ariaExpanded = !Util.hasClass(nav, 'main-header__nav--is-visible');
          //show nav and update button aria value
          Util.toggleClass(nav, 'main-header__nav--is-visible', ariaExpanded);
          trigger.setAttribute('aria-expanded', ariaExpanded);
          if(ariaExpanded) { //opening menu -> move focus to first element inside nav
            nav.querySelectorAll('[href], input:not([disabled]), button:not([disabled])')[0].focus();
          }
        });
      }
      window.onscroll = function(e) {
        // print "false" if direction is down and "true" if up
        if(this.oldScroll < this.scrollY){
          mainHeader.classList.add("is-Hidden")
        } else {
          mainHeader.classList.remove("is-Hidden")
        }
        this.oldScroll = this.scrollY;
      };
    
    }());
    console.log(this.props)
  }
  logOut = () => {
    this.props.startAction();
    store.dispatch(logoutUser());
    window.location.href = '/';
    window.location.reload()
  };
  render() {
    return (
      <header className="main-header js-main-header">
        <div className="container">
          <div className="main-header__layout">
            <div className="main-header__logo">
              <a href="#0" className="logo--box">
                <Logo width={212} height={26}/>
              </a>
            </div>
            <button className="btn btn--subtle main-header__nav-trigger js-main-header__nav-trigger"
                    aria-label="Toggle menu" aria-expanded="false" aria-controls="main-header-nav">
              <i className="main-header__nav-trigger-icon" aria-hidden="true"/>
              <span>Menu</span>
            </button>
        
            <nav className="main-header__nav js-main-header__nav" id="main-header-nav"
                 aria-labelledby="main-header-nav-label" role="navigation">
              <div id="main-header-nav-label" className="main-header__nav-label">Main menu</div>
              <ul className="main-header__nav-list">
                <li className="main-header__nav-item">
                  <a href="#0" className="main-header__nav-link">
                    <div className="avatar avatar--lg">
                      <figure className="avatar__figure" role="img" aria-label="James Powell">
                        <svg className="avatar__placeholder" aria-hidden="true" viewBox="0 0 20 20"
                             strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="10" cy="6" r="2.5" stroke="currentColor"/>
                          <path
                            d="M10,10.5a4.487,4.487,0,0,0-4.471,4.21L5.5,15.5h9l-.029-.79A4.487,4.487,0,0,0,10,10.5Z"
                            stroke="currentColor"/>
                        </svg>
                        <img className="avatar__img" src={avatar}  alt=""/>
                        {/*<div class="avatar__initials"><span>JP</span></div>*/}
                      </figure>
                    </div>
                  </a>
                </li>
                <li className="main-header__nav-item">{this.props.auth.user.name}</li>
                <li className="main-header__nav-item">
                  <a href="#0" className="dropIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                         viewBox="0 0 69 64">
                      <g fill="#111111">
                        <path fill="#111111"
                              d="M62.132,27.009L54.19,25.95c-0.516-1.896-1.268-3.693-2.223-5.36l4.869-6.367 c0.304-0.398,0.267-0.96-0.087-1.314l-5.657-5.657c-0.355-0.355-0.916-0.394-1.314-0.087l-6.367,4.869 c-1.667-0.955-3.464-1.707-5.36-2.223l-1.059-7.942C36.925,1.371,36.501,1,36,1h-8c-0.501,0-0.925,0.371-0.991,0.868L25.95,9.81 c-1.896,0.516-3.693,1.268-5.36,2.223l-6.367-4.869c-0.398-0.306-0.96-0.268-1.314,0.087l-5.657,5.657 c-0.354,0.354-0.392,0.916-0.087,1.314l4.869,6.367c-0.955,1.667-1.707,3.464-2.223,5.36l-7.942,1.059C1.371,27.075,1,27.499,1,28v8 c0,0.501,0.371,0.925,0.868,0.991L9.81,38.05c0.516,1.896,1.268,3.693,2.223,5.36l-4.869,6.367c-0.304,0.398-0.267,0.96,0.087,1.314 l5.657,5.657c0.194,0.194,0.45,0.293,0.708,0.293c0.213,0,0.427-0.067,0.607-0.206l6.367-4.869c1.667,0.955,3.464,1.707,5.36,2.223 l1.059,7.942C27.075,62.629,27.499,63,28,63h8c0.501,0,0.925-0.371,0.991-0.868l1.059-7.942c1.896-0.516,3.693-1.268,5.36-2.223 l6.367,4.869c0.18,0.139,0.394,0.206,0.607,0.206c0.258,0,0.514-0.099,0.708-0.293l5.657-5.657c0.354-0.354,0.392-0.916,0.087-1.314 l-4.869-6.367c0.955-1.667,1.707-3.464,2.223-5.36l7.942-1.059C62.629,36.925,63,36.501,63,36v-8 C63,27.499,62.629,27.075,62.132,27.009z M32,41c-4.971,0-9-4.029-9-9c0-4.971,4.029-9,9-9c4.971,0,9,4.029,9,9 C41,36.971,36.971,41,32,41z"/>
                      </g>
                    </svg>
                    <svg className="setLogo" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                         viewBox="0 0 48 48"><title>
                      ic_arrow_drop_down_48px</title>
                      <g className="nc-icon-wrapper" fill="#111111">
                        <path d="M14 20l10 10 10-10z"/>
                      </g>
                    </svg>
                  </a>
                  <div className="dropdown">
                    <ul>
                      <li><button className="appearance--none" onClick={this.logOut}>Logout</button></li>
                    </ul>
                  </div>
                </li>
                <li className="main-header__nav-item main-header__nav-divider" aria-hidden="true"/>
                <li className="main-header__nav-item">
                  <Switch theme={this.props}/>
                </li>
              </ul>
            </nav>
          </div>
        
        </div>
      </header>
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
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
