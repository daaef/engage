import React, { Component } from 'react';
import {connect} from "react-redux";
import {startAction} from "../../store/actions/start";
import {stopAction} from "../../store/actions/stop";
import StepSeperator from "../common/StepSeperator";
import {Tick} from "../svgs/Tick";
import {Input} from "../common/Input";
import 'flatpickr/dist/themes/material_green.css'
import Flatpickr from 'react-flatpickr'

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
    }
  }
  
  
  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onActive = (e) => {
    e.target.classList.add('active');
  };
  
  handleDate = (date) => {
    this.setState({
      event_date: date
    });
    console.log(this.state.event_date)
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
  const { event_name, event_date,onDate, change, active } = props;
  return (
    <div className="width-100 flex flex--center">
      <div className="flex step1">
        <Input type="email"
               id="ename"
               name="event_name"
               value={event_name}
               onChange={change}
               label="Event Name"
               required
        />
        <div className="select">
  
          <select className="form-control" name="event_type" onFocus={active} onChange={change} id="selectThis">
              <option value="" selected disabled/>
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
        <Flatpickr data-enable-time
                   value={event_date}
                   onChange={onDate} />
      </div>
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
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});
export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
