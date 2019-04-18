import React, { Component } from 'react';
import {connect} from "react-redux";
import {startAction} from "../../store/actions/start";
import {stopAction} from "../../store/actions/stop";
import {createEvent} from "../../store/actions/createEvent";
import axios from "axios";

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
          {eventContent && <h2 className="uk-light">{eventContent.event_name}</h2>}
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
