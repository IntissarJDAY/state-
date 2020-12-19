import React from 'react';
import './App.css';

class App extends React.Component {
  state={
    show: false,
    Person :{ 
      fullName:"",
      bio:"", 
      imgSrc:"", 
      profession:""},
      counter:0
    };
  
  show1=() => {
    this.setState({show:!this.state.show})
  };
  handleChange=(e)=>{
this.setState({Person:{...this.state.Person, [e.target.id]:e.target.value},})
  };
  componentDidMount(){
    setInterval(() => {
      this.setState({counter:this.state.counter  +1})
    }, 1000);
  };
  render (){
  return (
    <div style={{textAlign:'center',paddingTop:20}}>
     <button onClick = {this.show1} >Show Profile</button><br/>
     {this.state.show ? <input type="text" id="fullName" onChange={this.handleChange} placeholder="your name"/>: null}<br/>
     {this.state.show ?<input type="text" id="bio" onChange={this.handleChange} placeholder="Bio"/>: null}<br/>
     {this.state.show ?<input type="text" id="imgSrc" onChange={this.handleChange} placeholder="your image"/>: null}<br/>
     {this.state.show ?<input type="text" id="profession"onChange={this.handleChange} placeholder="Profession"/> : null}
    </div>
  );
}
}
export default App;
