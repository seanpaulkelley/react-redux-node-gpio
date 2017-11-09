import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from '../actions';
import { setPin, getPin } from '../actions';
import { bindActionCreators } from 'redux';

class Light extends Component {
  render() {
    return (
      <div>
        <span
          className={`${this.props.light.real
            ? 'amber lighten-4'
            : 'grey lighten-2'}`}
        >
          Pin Status: {this.props.light.real ? 'On' : 'Off'}
        </span>
        <br />
        <br />
        <button
          className="btn"
          onClick={() => this.props.setPin(!this.props.light.real)}
        >
          Set Light to {!this.props.light.real ? 'On' : 'Off'}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //lightOn: state.lightOn
  return { light: state.light };
}

function mapDispatchToProps(dispatch) {
  //whenever selectBook is called the result should be passed to all of our reducers
  return bindActionCreators({ setPin: setPin, getPin: getPin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Light);
