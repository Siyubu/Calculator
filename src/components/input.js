import React, { Component } from "react";

class Input extends Component {
  render() {
    return( 
      <div id="display" className="input">
        {this.props.currentValue}
      </div>
    )
  }
}

export default Input;