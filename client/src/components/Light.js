import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from '../actions';
import { setLight } from '../actions';
import { bindActionCreators } from 'redux';

class Light extends Component {
  render() {
    return (
      <div>
        Light On: {this.props.light.on.toString()}
        <button
          className="btn"
          onClick={() => this.props.setLight(!this.props.light.on)}
        >
          Set Light!
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
  return bindActionCreators({ setLight: setLight }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Light);
