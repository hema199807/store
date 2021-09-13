import React, {Component} from 'react';
import '../App.css';
import Modal  from 'react-modal';
import {withRouter} from 'react-router-dom';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '30%',
      height                :  '55vh',
      background            : 'aquamarine'
    }
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName:"",
      userName:"",
      pass:"",
      loginModelIsOpen:false,
    }
  }
  handlechange=(event,state)=>{
    this.setState({[state]:event.target.value})
  }
  handleCancel=()=>{
    this.setState({userName:"",pass:"",fullName:""})
  }
  handleSignUp=()=>{
    const {userName,pass,fullName}=this.state;
    if(!userName || !pass || !fullName){
      return alert("all fields are required");
    }
    if(userName.toLowerCase() ==="test-admin"){
      var mArr=JSON.parse(localStorage.getItem("User"))===null?[]:JSON.parse(localStorage.getItem("User"));
      var pos=-1;
      for(var i=0;i<mArr.length;i++){
        if(mArr[i].name===fullName && mArr[i].userName===userName){
            pos=i;  
        }
        }
        if(pos>-1){
            this.setState({userName:"",pass:"",fullName:"",loginModelIsOpen:true})
        return alert("user already exist, please Login");
        }else{
            mArr.push({
                name:fullName,
                userName:userName.toLowerCase(),
                password:pass
            })
            localStorage.setItem("User",JSON.stringify(mArr));
            this.setState({userName:"",pass:"",fullName:"",loginModelIsOpen:true})
            return alert("account created sucessfully");
        }
      
    }if(userName.toLowerCase() ==="test-sales"){
      this.setState({userName:"",pass:"",fullName:"",})
      this.props.history.push('/Executive');
        return alert("sales Executives login directly");
    }
    else{
      return alert("UserName Should be test-admin or test-sales");
    }
    
  }
  handleSignInSignUp=()=>{
    this.setState({loginModelIsOpen:true})
  }
  handlelogincancel=()=>{
    this.setState({userName:"",pass:"",loginModelIsOpen:false})
  }
  handleSignIn=()=>{
    const {userName,pass}=this.state;
    if(!userName || !pass){
        return alert("all fields are required");
    }
    var mArr=JSON.parse(localStorage.getItem("User"))===null?[]:JSON.parse(localStorage.getItem("User"));
    var pos=-1;
    for(var i=0;i<mArr.length;i++){
        if(mArr[i].userName===userName.toLowerCase() && mArr[i].password===pass){
            pos=i;  
        }
    }
    if(pos>-1){
        if(userName.toLowerCase()==="test-admin"){
            this.props.history.push('/Manager');
        }
        this.setState({userName:"",pass:"",loginModelIsOpen:false})
        return alert("Loged in successfully");
    }else{
        return alert("Account doesnot exist, please create account then login or check password");
    }
  }

  render() { 
    const {userName,pass,fullName,loginModelIsOpen}=this.state
    return ( 
      <div id="background">
        <div id="signUp">
          <h2>SignUp</h2>
          <label id="username">Fullname :
            <input type="text" required value={fullName} onChange={(event)=>this.handlechange(event,'fullName')} className="input-field"/>
          </label>
          <br></br>
          <label id="user">Username :
            <input type="text" required value={userName} onChange={(event)=>this.handlechange(event,'userName')} className="input-field"/>
          </label>
          <br></br>
          <label id="pass">Password :
            <input type="text" required value={pass} onChange={(event)=>this.handlechange(event,'pass')} className="input-field"/>
          </label>
          <button id="cancel-bth" onClick={this.handleCancel}>Cancel</button>
          <button id="signin-btn" onClick={this.handleSignUp}>SignUp</button>
        </div>
        <div>
          <p id="msg">If account is already created then Login below</p>
          <button id="login-signup" onClick={this.handleSignInSignUp}>SignIn</button>
        </div>
        <Modal
            isOpen={loginModelIsOpen}
            style={customStyles}
        >
                        
            <div id="signIn">
                <h2>SignIn</h2>
                <label id="loguser">Username :
                    <input type="text" required value={userName} onChange={(event)=>this.handlechange(event,'userName')} className="input-field"/>
                </label>
                <br></br>
                <label id="logpass">Password :
                    <input type="text" required value={pass} onChange={(event)=>this.handlechange(event,'pass')} className="input-field"/>
                </label>
                <button id="log-cancel-bth" onClick={this.handlelogincancel}>Cancel</button>
                <button id="log-signin-btn" onClick={this.handleSignIn}>Signin</button>
                           
            </div>
        </Modal> 
      </div>
    );
  }
}
 
export default withRouter(Signup);