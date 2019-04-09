import React, { Component } from 'react';
import Wed from "../../assets/img/wed.jpg"
import Wedding from "../../assets/img/wedding.jpg"
import {connect} from "react-redux";
import { mode_dark,mode_light } from "../../store/actions/toggle_dark";
import {startAction} from "../../store/actions/start";
import {stopAction} from "../../store/actions/stop";
import {Loading} from "../common/Loader";
import {EventsIcon} from "../svgs/EventsIcon";
import {GuestsIcon} from "../svgs/GuestsIcon";
import {VenuesIcon} from "../svgs/VenuesIcon";
import {UsersIcon} from "../svgs/UsersIcon";

class Summary extends Component {
  
  componentWillMount() {
    this.props.startAction();
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.props.auth.isAuthenticated) {
      window.location.href = '/';
    }
  }
  
  componentDidMount() {
    setTimeout(
      this.props.stopAction
      , 1500);
  }
  
  render() {
    return (
      <>
        {(this.props.loading.loading) ? <Loading/> : ""}
        <main className="cd-main-content summary">
          <div className="title__and__button">
            <div className="right">
              <a href="#0" className="btn" aria-controls="modal1">Add Item</a>
              <div className="modal js-modal" id="modal1">
                <div className="modal__content modal__content--sm" role="alertdialog" tabIndex="-1"
                     aria-labelledby="modalTitle1" aria-describedby="modalDescription1">
                  <div className="modal__body">
                    <h5 className="width-100 text--center">Select and Option to add</h5>
                    <div className="flex width-100 selfCenter flex--space-around flex--wrap">
                      <div className="iconLinks">
                        <a href="#">
                          <EventsIcon/>
                        </a>
                        <span>Event</span>
                      </div>
                      <div className="iconLinks">
                        <a href="#">
                          <GuestsIcon/>
                        </a>
                        <span>Guest</span>
                      </div>
                      <div className="iconLinks">
                        <a href="#">
                          <VenuesIcon/>
                        </a>
                        <span>Venue</span>
                      </div>
                      <div className="iconLinks">
                        <a href="#">
                          <UsersIcon/>
                        </a>
                        <span>User</span>
                      </div>
                    </div>
                  </div>
                </div>
          
                <button className="reset modal__close-btn js-modal__close">
                  <svg className="icon" viewBox="0 0 16 16"><title>Close modal window</title>
                    <g strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                       strokeMiterlimit="10">
                      <line x1="13.5" y1="2.5" x2="2.5" y2="13.5"/>
                      <line x1="2.5" y1="2.5" x2="13.5" y2="13.5"/>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="feature-summary">
            <div className="event--list">
              <div>
                <div className="event--card">
                  <img src={Wed} alt="" />
                    <div className="text">
                      <p>Ademola and Ifeoma</p>
                    </div>
                </div>
                <div className="event--card">
                  <img src={Wedding} alt="" />
                    <div className="text">
                      <p>Omojo & Ibukun</p>
                    </div>
                </div>
                <div className="event--info">
                  <h3>Latest Events</h3>
                  <button className="btn btn--success">Show All</button>
                </div>
              </div>
            </div>
            <div className="feature--counts">
              <div className="count">
                <div>
                  Guests
                </div>
                <div>
                  <svg width="80" height="80" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i)">
                      <path
                        d="M21.375 35.625C27.9334 35.625 33.25 30.3084 33.25 23.75C33.25 17.1916 27.9334 11.875 21.375 11.875C14.8166 11.875 9.5 17.1916 9.5 23.75C9.5 30.3084 14.8166 35.625 21.375 35.625Z"
                        fill="#AFAFAF"/>
                      <path
                        d="M57 35.625C66.1817 35.625 73.625 28.1817 73.625 19C73.625 9.81827 66.1817 2.375 57 2.375C47.8183 2.375 40.375 9.81827 40.375 19C40.375 28.1817 47.8183 35.625 57 35.625Z"
                        fill="#AFAFAF"/>
                      <path
                        d="M31.521 85.2886C28.3433 84.493 26.125 81.6501 26.125 78.375V52.25C26.125 47.7232 27.949 43.6192 30.894 40.6172C30.1198 40.4581 29.3194 40.375 28.5 40.375H14.25C7.70213 40.375 2.375 45.7021 2.375 52.25V73.625C2.375 74.6486 3.02813 75.5535 3.9995 75.8789L9.652 77.7623L11.8845 102.341C11.9961 103.562 13.0221 104.5 14.25 104.5H28.5C29.7279 104.5 30.7539 103.562 30.8655 102.339L32.395 85.5047L31.521 85.2886Z"
                        fill="#AFAFAF"/>
                      <path
                        d="M92.625 35.625C99.1834 35.625 104.5 30.3084 104.5 23.75C104.5 17.1916 99.1834 11.875 92.625 11.875C86.0666 11.875 80.75 17.1916 80.75 23.75C80.75 30.3084 86.0666 35.625 92.625 35.625Z"
                        fill="#AFAFAF"/>
                      <path
                        d="M82.479 85.2886C85.6567 84.493 87.875 81.6501 87.875 78.375V52.25C87.875 47.7232 86.051 43.6192 83.106 40.6172C83.8802 40.4581 84.6806 40.375 85.5 40.375H99.75C106.298 40.375 111.625 45.7021 111.625 52.25V73.625C111.625 74.6486 110.972 75.5535 110 75.8789L104.348 77.7623L102.115 102.341C102.004 103.562 100.978 104.5 99.75 104.5H85.5C84.2721 104.5 83.2461 103.562 83.1345 102.339L81.605 85.5047L82.479 85.2886Z"
                        fill="#AFAFAF"/>
                      <path
                        d="M71.25 40.375H42.75C36.2021 40.375 30.875 45.7021 30.875 52.25V78.375C30.875 79.4651 31.616 80.4151 32.6729 80.6788L40.5246 82.6405L42.7571 109.447C42.8616 110.68 43.89 111.625 45.125 111.625H68.875C70.11 111.625 71.1384 110.68 71.2429 109.447L73.4754 82.6405L81.3271 80.6788C82.384 80.4151 83.125 79.4651 83.125 78.375V52.25C83.125 45.7021 77.7979 40.375 71.25 40.375Z"
                        fill="#AFAFAF"/>
                    </g>
                    <defs>
                      <filter id="filter0_i" x="-1" y="0" width="115" height="115" filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="-1" dy="1"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                      </filter>
                    </defs>
                  </svg>
            
                  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 44 44">
                    <g filter="url(#filter0_i)">
                      <text x="0%" y="65%" fill="#AFAFAF">197</text>
                    </g>
                  </svg>
                </div>
                <div>
                  <button className="btn btn--success">Show All</button>
                </div>
              </div>
              <div className="count">
                <div>
                  Events
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 44 44">
                    <g filter="url(#filter0_i)">
                      <path
                        d="M34.305 26.102c-4.935 0-8.949 4.014-8.949 8.949 0 4.934 4.014 8.949 8.95 8.949 4.934 0 8.948-4.014 8.948-8.95 0-4.934-4.014-8.948-8.949-8.948zm0 16.406c-4.112 0-7.457-3.345-7.457-7.457s3.345-7.458 7.457-7.458 7.458 3.346 7.458 7.458-3.346 7.457-7.458 7.457z"
                        fill="#AFAFAF"/>
                      <path
                        d="M38.78 34.305h-3.73v-3.729a.745.745 0 1 0-1.49 0v4.475c0 .412.333.746.745.746h4.475a.745.745 0 1 0 0-1.492z"
                        fill="#AFAFAF"/>
                      <path
                        d="M39.526 3.729a.746.746 0 0 0-.746-.746h-3.73V.746A.746.746 0 0 0 34.306 0h-5.22a.746.746 0 0 0-.746.746v2.237H11.932V.746A.746.746 0 0 0 11.187 0h-5.22a.746.746 0 0 0-.747.746v2.237H1.492a.746.746 0 0 0-.746.746v6.712h38.78V3.729zm-29.085 0v2.237H6.71V1.492h3.73v2.237zm23.118 0v2.237h-3.728V1.492h3.728v2.237z"
                        fill="#AFAFAF"/>
                      <path
                        d="M34.305 23.864c1.886 0 3.66.474 5.22 1.3V12.678a.746.746 0 0 0-.745-.746H1.492a.746.746 0 0 0-.746.746v29.085c0 .412.334.745.746.745H25.99a11.127 11.127 0 0 1-2.872-7.457c0-6.168 5.018-11.187 11.186-11.187zm-5.966-7.457h5.966v5.966H28.34v-5.966zM11.932 37.288H5.966v-5.966h5.966v5.966zm0-7.457H5.966v-5.967h5.966v5.966zm0-7.458H5.966v-5.966h5.966v5.966zm7.458 14.915H13.424v-5.966h5.966v5.966zm0-7.457h-5.966v-5.967h5.966v5.966zm0-7.458h-5.966v-5.966H19.39v5.966zm1.491-5.966h5.967v5.966H20.88v-5.966z"
                        fill="#AFAFAF"/>
                    </g>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 44 44">
                    <g filter="url(#filter0_i)">
                      <text x="35%" y="65%" fill="#AFAFAF">2</text>
                    </g>
                  </svg>
          
                </div>
                <div>
                  <button className="btn btn--success">Show All</button>
                </div>
              </div>
            </div>
            <div className="invites">
              <div className="count">
                <div>
                  Invites sent
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="98" height="103" viewBox="0 0 98 103">
                    <g filter="url(#filter0_i)">
                      <path
                        d="M94.833 0H29.23a2.183 2.183 0 0 0-2.182 2.182v27.702H2.368a2.183 2.183 0 0 0-2.182 2.182v41.266c0 1.205.977 2.182 2.182 2.182h11.25v27.699c0 1.205.977 2.182 2.182 2.182h65.6a2.182 2.182 0 0 0 2.183-2.182V61.948a2.182 2.182 0 0 0-2.182-2.182H70.15V45.63h24.682a2.183 2.183 0 0 0 2.182-2.183V2.182A2.183 2.183 0 0 0 94.833 0zM37.515 4.365l-3.017 3.017-.002.002-3.082 3.082V4.365h6.101zM10.587 34.249L7.57 37.265a.38.38 0 0 0-.003.003L4.55 40.285v-6.036h6.036zm7.395 35.917V64.13h6.037l-6.037 6.036zm61.236 30.865H17.982V76.339l2.407-2.406a2.18 2.18 0 0 0 4.337-.331v-2.728h2.728a2.181 2.181 0 1 0 .331-4.337l2.406-2.406h49.027v36.9zM15.8 59.765a2.182 2.182 0 0 0-2.183 2.183v9.201H4.55V46.458l2.407-2.407a2.181 2.181 0 0 0 4.337-.33v-2.728h2.728a2.181 2.181 0 1 0 .331-4.337l2.406-2.407h49.028v25.517H15.8zm76.85-18.5H70.152V34.25h3.665a2.183 2.183 0 0 0 0-4.365H31.414V16.639l2.471-2.472a2.181 2.181 0 0 0 4.338-.33v-2.729h2.727a2.181 2.181 0 1 0 .331-4.337l2.407-2.406H92.65v36.9z"
                        fill="#AFAFAF"/>
                      <path d="M50.248 15.746h23.569a2.182 2.182 0 0 0 0-4.365H50.248a2.183 2.183 0 0 0 0 4.365z"
                            fill="#AFAFAF"/>
                      <path d="M73.817 20.633H50.248a2.183 2.183 0 0 0 0 4.364h23.569a2.182 2.182 0 0 0 0-4.364z"
                            fill="#AFAFAF"/>
                      <path d="M46.953 41.265h-23.57a2.183 2.183 0 0 0 0 4.365h23.57a2.182 2.182 0 0 0 0-4.365z"
                            fill="#AFAFAF"/>
                      <path d="M46.953 50.517h-23.57a2.182 2.182 0 0 0 0 4.364h23.57a2.182 2.182 0 0 0 0-4.364z"
                            fill="#AFAFAF"/>
                      <path d="M36.816 75.512h23.569a2.183 2.183 0 0 0 0-4.365h-23.57a2.183 2.183 0 0 0 0 4.365z"
                            fill="#AFAFAF"/>
                      <path d="M36.816 84.763h23.569a2.183 2.183 0 0 0 0-4.365h-23.57a2.183 2.183 0 0 0 0 4.365z"
                            fill="#AFAFAF"/>
                      <path d="M60.385 89.65h-23.57a2.183 2.183 0 0 0 0 4.364h23.57a2.182 2.182 0 0 0 0-4.365z"
                            fill="#AFAFAF"/>
                    </g>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 44 44">
                    <g filter="url(#filter0_i)">
                      <text x="0%" y="65%" fill="#AFAFAF">201</text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
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
export default connect(mapStateToProps, mapDispatchToProps)(Summary);
