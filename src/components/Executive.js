import React, {Component} from 'react';
import Headers from './Headers';
import Modal  from 'react-modal';
import Order from './Order';

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
      background            : 'Black',
    }
};

class Executive extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            optionModelOpen:false,
            addFirstName:"",
            addPassword:""
        }
    }
    componentDidMount(){
        this.setState({optionModelOpen:true});
    }
    handledetailscancel=()=>{
        this.setState({optionModelOpen:false});
    }
    handlechange=(event,state)=>{
        this.setState({[state]:event.target.value})
    }
    handleCheck=()=>{
        const {addFirstName,addPassword}=this.state;
        let detais=JSON.parse(localStorage.getItem("salesExecutive"));
        let pos=-1;
        detais.map((item,index)=>{
            if(item.FirstName.toLowerCase()===addFirstName.toLowerCase() && item.PassWord.toLowerCase()===addPassword.toLowerCase()){
                pos=index;
               
            }
        })
        if(pos>-1){
            this.setState({optionModelOpen:false})
            // this.props.history.push('/order');
        }else{
            return alert("Your details are not exist in Executive team, contact Manager")
        }
    }

    render() { 
        const {addFirstName,addPassword,optionModelOpen}=this.state;
        return ( 
            <div>
                <Modal
                    isOpen={optionModelOpen}
                    style={customStyles}
                >
                        
                    <div id="Update">
                        <h2>Sales Executive Details</h2>
                        <label id="userName">FirstName: :
                        <input type="text" required value={addFirstName} onChange={(event)=>this.handlechange(event,'addFirstName')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate">PassWord :
                        <input type="text" required value={addPassword} onChange={(event)=>this.handlechange(event,'addPassword')} className="input-field"/>
                        </label>
                        <br></br>
                        <button id="btn-cancel" onClick={this.handledetailscancel}>Cancel</button>
                        <button id="log-signin-btn" onClick={this.handleCheck}>check</button>
                    </div>
                </Modal> 
                <Order Firstname={addFirstName} password={addPassword}/>
            </div> 
        );
    }
}
 
export default Executive;
