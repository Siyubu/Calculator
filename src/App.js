
import React,{Component} from "react"
import Buttons from './components/Button'
import Input from './components/input'
import './App.css'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      display: '0',
      previousNumber: '0',
      currentNumber: "",
      operator: "",
     prevOperator:""
    };
    this. displayNumber = this.displayNumber.bind(this)
    this.addZero = this.addZero.bind(this)
    this.addDecimal = this.addDecimal.bind(this)
    this.clear = this.clear.bind(this)
    this.handleEvaluate = this.handleEvaluate.bind(this)
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
    this.divide = this.divide.bind(this)
    this.multiply = this.multiply.bind(this)
    this.calculate = this.calculate.bind(this)
    this.handleNegative = this.handleNegative.bind(this)

  }
  displayNumber(num){
    if(this.state.display==='0'){
      this.setState({
        display: num
      })
    }
    else{
      this.setState({
        display:this.state.display + num
      })
    }  
  }
  addZero(num){
    if(this.state.display!==''){
      this.setState({
        display:this.state.display + num 
      })
    }
  }
  addDecimal(val){
    if(this.state.display.indexOf('.') === -1){
      this.setState({
        display:this.state.display + val
      })
    }
  }
  add ()  {
    
    if(this.state.previousNumber === '0' || this.state.previousNumber ==="" || this.state.operator==='equal') {
      this.setState({
      previousNumber : this.state.display
      })
    }
  else if(this.state.display!==""){
    this.setState({
      previousNumber : this.calculate(this.state.previousNumber,this.state.display,this.state.operator)
    })
    
  }
    this.setState({ 
      display: "",
      operator :"plus",
      prevOperator : ""
  });
  };
  subtract () {
    if(this.state.previousNumber === '0' || this.state.previousNumber ==="" || this.state.operator==='equal' ) {
      this.setState({
      previousNumber : this.state.display
      })
    }
  else if(this.state.display!==""){
    this.setState({
      previousNumber : this.calculate(this.state.previousNumber,this.state.display,this.state.operator)
    })
  }
  if(this.state.operator==='multiply'){
    this.setState({
      prevOperator : "multiply"
    })
  }
    this.setState({
       display: "" ,
       operator: "subtract"
      });
  };
  
  multiply () {
    if(this.state.previousNumber === '0'||this.state.previousNumber ==="" || this.state.operator==='equal') {
      this.setState({
      previousNumber : this.state.display
      })
    }
  else if(this.state.display!==""){
    this.setState({
      previousNumber : this.calculate(this.state.previousNumber,this.state.display,this.state.operator)
    })
  }
    this.setState({ 
      display: "" ,
      operator : "multiply"
  });
  };

  divide () {
    if(this.state.previousNumber === '0'||this.state.previousNumber ==="" || this.state.operator==='equal') {
      this.setState({
      previousNumber : this.state.display
      })
    }
  else if(this.state.display!==""){
    this.setState({
      previousNumber : this.calculate(this.state.previousNumber,this.state.display,this.state.operator)
    })
  }
    this.setState({ 
      display: "",
      operator : "divide",
      prevOperator : ""
     });
  };

  handleEvaluate() {
    let t
    this.state.currentNumber = this.state.display;
    if(this.state.prevOperator !==""){
      t=this.handleNegative(this.state.previousNumber,this.state.currentNumber,this.state.operator)
    }
    else{
      t =this.calculate(this.state.previousNumber,this.state.currentNumber,this.state.operator)
    }
  
    this.setState({
          operator:"equal",
          evaluate: true,
          display: t
         });
  }

  clear(){
    this.setState({
      display: '0',
      previousNumber: "0",
      currentNumber: "",
      operator: ""
    })

  }
  calculate(firstNum,secondNum, operator){
    let result;
    while(operator!=="equal"){
      switch(operator){
        case 'plus':
          result= parseFloat(firstNum) + parseFloat(secondNum);
          break;
          case 'subtract':
          result= parseFloat(firstNum) - parseFloat(secondNum);
          break;
          case 'multiply':
          result= parseFloat(firstNum) * parseFloat(secondNum);
          break;
          case 'divide':
          result= parseFloat(firstNum) / parseFloat(secondNum);
          break;
          default:
            result = this.state.display
      }
     
      
      return result.toString();

    }
 }

 handleNegative(firstNum,secondNum, operator){
   let result
  if(this.state.prevOperator === "multiply" && operator === 'subtract'){
    result= -(parseFloat(firstNum) * parseFloat(secondNum));
  }
return result
 }
  render(){
  return (
    <div className="App " id="app">
      <div className="calculator col-sm-4 col-sm-offset-2 col-md-3 ">
        <div className="row">
          <Input currentValue={this.state.display} />
          </div>
      <Buttons 
      handleClick={this.displayNumber}
      zeroInput={this.addZero}
      addDecimal={this.addDecimal}
      clear = {this.clear}
      evaluate = {this.handleEvaluate}
      addition = {this.add}
      subtraction = {this.subtract}
      division = {this.divide}
      multiplication = {this.multiply}
      />
      </div>
      </div>
  );
}
}
