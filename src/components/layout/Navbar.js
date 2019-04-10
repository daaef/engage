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
  
    /*this.dropIcon = document.querySelectorAll('.dropIcon').forEach((dropdown)=>{
      console.dir(dropdown);
      dropdown.addEventListener('click', ()=>{
        dropdown.nextSibling.classList.toggle('drop')
      })
    });*/
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
                  <button className="appearance--none" onClick={this.logOut}>Logout</button>
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
