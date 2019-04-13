import React, { Component } from 'react';
import {connect} from "react-redux";
import {startAction} from "../../store/actions/start";
import {stopAction} from "../../store/actions/stop";
import StepSeperator from "../common/StepSeperator";
import {Tick} from "../svgs/Tick";
import {Input} from "../common/Input";
import 'flatpickr/dist/themes/material_green.css'
import Flatpickr from 'react-flatpickr'
import {createEvent} from "../../store/actions/createEvent";
import UIkit from "uikit";
import {Redirect} from "react-router-dom";
import store from "../../store";
import {loginUser} from "../../actions/authActions";

class AddEvent extends Component {
  constructor(props){
    super(props);
    this.state={
      step1: {
        condition: true,
        class: "step--current"
      },
      step2:  {
        condition: false,
        class: ""
      },
      step3:  {
        condition: false,
        class: ""
      },
      step4:  {
        condition: false,
        class: ""
      },
      event_name: "",
      event_type: "",
      event_date: new Date(),
      method_invitation: "",
      guest_num: "",
      event_pic: "",
      event_venue: "",
      redirect: false
    }
  }
  
  handleFile = (e) => {
    let image = new Image();
    let reader = new FileReader();
    reader.onload = function(e){
      image.src = e.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
    setTimeout(()=>{
      this.setState({
        event_pic: image.src
      })
    },500)
  };
  
  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  submitEvent =() => {
    const Event = {
      event_name: this.state.event_name,
      event_type: this.state.event_type,
      event_date: this.state.event_date,
      event_venue: this.state.event_venue,
      event_pic: this.state.event_pic,
      method_invitation: this.state.method_invitation,
      guest_num: this.state.guest_num
    };
  console.log(Event,  new Date(`${Event.event_date}`));
    store.dispatch(createEvent(Event));
    setTimeout(()=>{
      this.setState({
        redirect: true
      })
    },500)
  };
  
  onActive = (e) => {
    e.target.classList.add('active');
    console.log(e)
  };
  
  handleDate = (date) => {
    this.setState({
      event_date: date[0].toISOString()
    });
    console.log(date[0].toISOString())
  };
  
  toggle1 = ()=>{
    this.setState({
      step1: {
        condition: true,
        class: "step--completed"
      },
      step2: {
        condition: false,
        class: "step--completed"
      },
      step3: {
        condition: false,
        class: "step--current"
      }
    })
  };
  
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/dashboard' />
    }
  };
  
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
      , 500);
     }
  
  render() {
    return (
      <>
        {this.renderRedirect()}
        <main className="cd-main-content">
          <div className="steps" aria-label="Multi-step indicator">
            <ol className="steps__list">
              <li className={`step ${this.state.step1.class}`}>
                <button className="step__label">Event</button>
                <StepSeperator/>
                <div className="step__circle" aria-hidden="true">
                  <span className="num">1</span>
                  <Tick/>
                </div>
              </li>
  
              <li className={`step ${this.state.step2.class}`}>
                <button onClick={this.toggle1} className="step__label">Guests</button>
                <StepSeperator/>
                <div className="step__circle" aria-hidden="true">
                  <span className="num">2</span>
                  <Tick/></div>
              </li>
  
              <li className={`step ${this.state.step3.class}`}>
                <button className="step__label">Template</button>
                <StepSeperator/>
                <div className="step__circle" aria-hidden="true">
                  <span className="num">3</span>
                  <Tick/></div>
              </li>
  
              <li className={`step ${this.state.step4.class}`}>
                <button className="step__label">Customization</button>
                <div className="step__circle" aria-hidden="true">
                  <span className="num">4</span>
                  <Tick/></div>
              </li>
            </ol>
          </div>
          {this.state.step1.condition && <Step1
            change={this.onChange}
            active={this.onActive}
            content={this.state}
            onDate={this.handleDate}
            changePic={this.handleFile}
            submitEvent={this.submitEvent}
          />}
          {this.state.step2.condition && <Step2 content={this.state}/>}
          {this.state.step3.condition && <Step3 content={this.state}/>}
          {this.state.step4.condition && <Step4 content={this.state}/>}
        </main>
      </>
    );
  }
}
const Step1 = (props) => {
  const { event_name, event_type, event_venue, event_date,onDate, guest_num,event_pic,submitEvent, change, changePic, active } = props;
  return (
    <div className="uk-width-1-1@m uk-flex uk-flex-center uk-padding">
      <div className="step1 uk-grid uk-child-width-1-3@m">
        <div>
        <Input type="email"
               id="ename"
               name="event_name"
               value={event_name}
               onChange={change}
               label="Event Name"
               required
        />
        </div>
        <div>
        <div className="select">
  
          <select className="form-control" name="event_type" defaultValue={event_type} onFocus={active} onChange={change} id="selectThis">
              <option value=""/>
              <option value="wedding">Wedding</option>
          </select>
          <svg className="icon" aria-hidden="true" viewBox="0 0 16 16">
            <g strokeWidth="1" stroke="currentColor">
              <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        strokeMiterlimit="10" points="15.5,4.5 8,12 0.5,4.5 "/>
            </g>
          </svg>
          <label className="form-label" htmlFor="selectThis">Event Type</label>
        </div>
        </div>
        <div>
        <div className="input margin-bottom--md">
        <Flatpickr id="date"
                   className="form-control"
                   value={event_date}
                   onChange={onDate}/>
        <label className="form-label" htmlFor="date">Event Date</label>
        </div>
        </div>
        <div>
          <div className="select">
      
            <select className="form-control" name="method_invitation" onFocus={active} onChange={change} id="method_invitation" defaultValue={""}>
              <option value=""></option>
              <option value="sms">SMS</option>
            </select>
            <svg className="icon" aria-hidden="true" viewBox="0 0 16 16">
              <g strokeWidth="1" stroke="currentColor">
                <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                          strokeMiterlimit="10" points="15.5,4.5 8,12 0.5,4.5 "/>
              </g>
            </svg>
            <label className="form-label" htmlFor="method_invitation">Method of Invitation</label>
          </div>
        </div>
        <div>
          <Input type="number"
                 id="guest_num"
                 name="guest_num"
                 value={guest_num}
                 onChange={change}
                 label="Number of Guests"
                 required
          />
        </div>
        <div>
          <Input type="file"
                 id="event_pic"
                 name="event_pic"
                 value={event_pic}
                 onChange={changePic}
                 label="Number of Guests"
                 required
          />
        </div>
        <div>
          <Input type="text"
                 id="event_venue"
                 name="event_venue"
                 value={event_venue}
                 onChange={change}
                 label="Location of Event"
                 required
          />
        </div>
      </div>
      <button className="btn uk-position-bottom-center btn--success" onClick={submitEvent}>Next</button>
    </div>
  )
};
const Step2 = () => {
  return (
    <h1>step2</h1>
  )
};
const Step3 = () => {
  return (
    <h1>step3</h1>
  )
};
const Step4 = () => {
  return (
    <h1>step4</h1>
  )
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  events: state.events,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction),
  createEvent: () => dispatch(createEvent)
});
export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
