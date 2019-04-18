import React, { Component } from 'react';
import {connect} from "react-redux";
import {startAction} from "../../store/actions/start";
import {stopAction} from "../../store/actions/stop";
import {createEvent} from "../../store/actions/createEvent";
import axios from "axios";
import isEmpty from "../../validation/is-empty";
import {CSSTransition} from "react-transition-group";
import {Load} from "../common/Load";

class EventDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventContent: null
    }
  }
  componentWillMount() {
    this.props.startAction();
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.props.auth.isAuthenticated) {
      window.location.href = '/';
    }
  }
  
  componentDidMount() {
    const { id } = this.props.match.params;
    const that = this;
    axios
      .get(`https://cryptic-meadow-10798.herokuapp.com/api/event/edit/${id}`)
      .then(res=>{
       that.setState({
         eventContent: res.data
       })
        console.log(res.data)
      })
      .catch(err => {
          console.log(err);
        }
      );
    setTimeout(
      this.props.stopAction
      , 1500);
  }
  
  render() {
    const { eventContent } = this.state;
    return (
      <>
        <main className="event-detail">
          <CSSTransition
            in={!eventContent}
            timeout={450}
            classNames="vanish"
            unmountOnExit
          >
            <Load/>
          </CSSTransition>
          {eventContent &&
          <div className="uk-flex eventInfo uk-flex-wrap">
            <div className="uk-width-2-3@m uk-width-1-2@s eventCover">
              <img src={eventContent.event_image} alt=""/>
            </div>
            <div className="uk-width-1-3@m uk-width-1-2@s eventDetail uk-flex uk-flex-middle uk-flex-center">
              <h3 className="uk-article-title uk-margin-remove uk-text-center">{eventContent.event_name}</h3>
            </div>
          </div>
          }
        </main>
      </>
    );
  }
}


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
export default connect(mapStateToProps, mapDispatchToProps)(EventDetailView);
