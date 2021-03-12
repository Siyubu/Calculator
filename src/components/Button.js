import React,{Component} from 'react'

const clearStyle = { background: '#ac3939' },
  operatorStyle = { background: '#666666' },
  equalsStyle = {
    background: '#004466',
    position: 'absolute',
    height: 130,
    bottom: 5
  };

  export default class Buttons extends Component {
    constructor(props) {
      super(props);
      this.buttonClick = this.buttonClick.bind(this)
      this.handleZero = this.handleZero.bind(this)
      this.handleDecimal = this.handleDecimal.bind(this)
    }
    buttonClick(e){
      this.props.handleClick(e.target.value)
  }
  handleZero(e){
    this.props.zeroInput(e.target.value)

  }
  handleDecimal(e){
    this.props.addDecimal(e.target.value)
  }
    render() {
      return (
        <div>
          <button
            className="jumbo"
            id="clear"
            onClick={this.props.clear}
            style={clearStyle}
            value="AC"
          >
            AC
          </button>

          <button
            id="divide"
            onClick={this.props.division}
            style={operatorStyle}
            value="/"
          >
            /
          </button>

          <button
            id="multiply"
            onClick={this.props.multiplication}
            style={operatorStyle}
            value="x"
          >
            x
          </button>
          <button id="seven" 
          onClick={this.buttonClick} value="7">
            7
          </button>
          <button id="eight" 
          onClick={this.buttonClick} 
          value="8">
            8
          </button>

          <button id="nine" 
          onClick={this.buttonClick} 
          value="9">
            9
          </button>

          <button
            id="subtract"
            onClick={this.props.subtraction}
            style={operatorStyle}
            value="‑"
          >
            ‑
          </button>
          <button id="four" 
          onClick={this.buttonClick} 
          value="4">
            4
          </button>

          <button id="five" 
          onClick={this.buttonClick} 
          value="5">
            5
          </button>

          <button id="six" 
         onClick={this.buttonClick} 
          value="6">
            6
          </button>

          <button
            id="add"
            onClick={this.props.addition}
            style={operatorStyle}
            value="+"
          >
            +
          </button>
          <button id="one" 
          onClick={this.buttonClick} 
          value="1">
            1
          </button>

          <button id="two" 
          onClick={this.buttonClick} 
          value="2">
            2
          </button>

          <button id="three" 
          onClick={this.buttonClick} 
          value="3">
            3
          </button>

          <button
            className="jumbo"
            id="zero"
          onClick={this.buttonClick}
            value="0"
          >
            0
          </button>
          
          <button id="decimal" 
          onClick={this.handleDecimal} 
          value=".">
            .
          </button>

          <button
            id="equals"
            onClick={this.props.evaluate}
            style={equalsStyle}
            value="="
          >
            =
          </button>
        </div>
      );
    }
  }
  