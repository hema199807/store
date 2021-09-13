import React, {Component} from 'react';
import '../styles/Manager.css';

import {medicine, salesTeam} from '../data';
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
      width                 : '50%',
      height                :  '40vh',
      background            : 'aliceblue',
    }
};


class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            optionModelOpen:false
        }
    }
    componentDidMount(){
        localStorage.setItem("products",JSON.stringify(medicine));
        localStorage.setItem("salesExecutive",JSON.stringify(salesTeam));
       this.setState({optionModelOpen:true});
    }
    handleMadicine=()=>{
        this.setState({optionModelOpen:false});
        this.props.history.push('/Medicine');
    }
    handleExecutive=()=>{
        this.setState({optionModelOpen:false});
        this.props.history.push('/salesExe');
    }

    render() {
        const {optionModelOpen}=this.state;
        return ( 
            <div> 
                
                <Modal
                    isOpen={optionModelOpen}
                    style={customStyles}
                >
                        
                    <div id="Update">
                        <button onClick={this.handleMadicine} id="btn-med">Medicine</button>
                        <button onClick={this.handleExecutive} id="btn-exe">Executive</button>
                    </div>
                </Modal> 
                
                
                {/* <Medicine /> */}
                {/* <Exicutive /> */}
                
            </div>
        );
    }
}
 
export default withRouter(Manager);