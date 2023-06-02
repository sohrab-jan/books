import React, { Component } from 'react';
class Like extends Component {
  render() {
    let classes = 'fa fa-heart';
    if (!this.props.Like === true) classes += '-o';
    return (
      <i
        onClick={this.props.onClick}
        className={classes}
        aria-hidden="true"
        style={{ cursor: 'pointer' }}
      ></i>
    );
  }
}

export default Like;
