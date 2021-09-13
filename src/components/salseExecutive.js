import React, {Component} from 'react';
import '../styles/Manager.css';
import Headers from './Headers';
import Modal  from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '50%',
      height                :  '70vh',
      background            : 'black',
    }
};


class Sales extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            length:0,
            editModelOpen:false,
            updateFirstName:"",
            updateLastName:"",
            updateDOB:"",
            updateGender:"",
            updateYOE:"",
            updatePassword:"",
            tempObj:{},
            products:[],
            addProductsModelOpen:false,
            addFirstName:"",
            addLastName:"",
            addDOB:"",
            addGender:"",
            addYOE:"",
            addPassword:"",
            searchValue:""
        }
    }
    componentDidMount(){
        
        this.setState({products:JSON.parse(localStorage.getItem("salesExecutive"))})
    }
    handlechange=(event,state)=>{
        this.setState({[state]:event.target.value})
    }
    handleEdit=(item)=>{
        this.setState({editModelOpen:true,tempObj:item,updateFirstName:item.FirstName,updateLastName:item.LastName,updateDOB:item.DOB,
        updateGender:item.Gender,updateYOE:item.YOE,updatePassword:item.PassWord})
    }
    handleUpdatecancel=()=>{
        this.setState({editModelOpen:false});
    }
    handleUpdate=()=>{
        const {tempObj,updateFirstName,updateLastName,updateDOB,updateGender,updateYOE,updatePassword}=this.state;
        let pos=-1;
        let localProduct=JSON.parse(localStorage.getItem("salesExecutive"));
        localProduct.map((item,index)=>{
            if(item.FirstName===tempObj.FirstName && item.LastName===tempObj.LastName && item.DOB===tempObj.DOB &&
                item.Gender===tempObj.Gender && item.YOE===tempObj.YOE && item.PassWord===tempObj.PassWord){
                pos=index;
            }
        })
        let newObj={
            FirstName:updateFirstName,
            LastName:updateLastName,
            DOB:updateDOB,
            Gender:updateGender,
            YOE:updateYOE,
            PassWord:updatePassword
        }
        let v= localProduct.splice(pos,1,newObj);
        this.setState({products:localProduct,editModelOpen:false,searchProduct:localProduct});
        localStorage.setItem("salesExecutive",JSON.stringify(localProduct));
        
        
    }
    handleDelete=(itemDelete)=>{
        let localProducts=JSON.parse(localStorage.getItem("salesExecutive"));
        let pos=-1;
        localProducts.map((item,index)=>{
            if(item.FirstName===itemDelete.FirstName && item.LastName===itemDelete.LastName && item.DOB===itemDelete.DOB &&
                item.Gender===itemDelete.Gender && item.YOE===itemDelete.YOE && itemDelete.PassWord===itemDelete.PassWord){
                pos=index;
            }
        })
        if(pos>-1){
            localProducts.splice(pos,1);
            this.setState({products:localProducts});
            localStorage.setItem("salesExecutive",JSON.stringify(localProducts));
        }
    }
    handleSearchValue=(e)=>{
        this.setState({searchValue:e.target.value});
    }
    handleAddProducts=()=>{
        this.setState({addProductsModelOpen:true});
    }
    handledetailscancel=()=>{
        this.setState({addProductsModelOpen:false});
    }
    handlechange=(event,state)=>{
        this.setState({[state]:event.target.value})
    }
    handleStockChange=(value)=>{
        this.setState({addGender:value});
    }
    handleAdd=()=>{
        const {addFirstName,addLastName,addDOB,addYOE,addGender,addPassword}=this.state;
        if(!addFirstName || !addLastName|| !addDOB || !addYOE || !addGender|| !addPassword){
            return alert("all fields required");
        }
        let addProducts=JSON.parse(localStorage.getItem("salesExecutive"));
        var pos=-1;
       
        for(var i=0;i<addProducts.length;i++){
            if(addProducts[i].FirstName===addFirstName && addProducts[i].LastName===addLastName && addProducts[i].DOB===addDOB &&
                addProducts[i].Gender===addGender && addProducts[i].YOE===Number(addYOE) && addProducts[i].PassWord===addPassword){
                pos=i;
            }
        }
        if(pos>-1){
            this.setState({addProductsModelOpen:false,addFirstName:"",addLastName:"",addDOB:"",addGender:"",addYOE:"",addPassword:""});
           return alert("sales Executive details is  already exist")
        }else{
            addProducts.push({
                FirstName:addFirstName,
                LastName:addLastName,
                DOB:addDOB,
                Gender:addGender,
                YOE:Number(addYOE),
                PassWord:addPassword
            })
            localStorage.setItem("salesExecutive",JSON.stringify(addProducts));
            this.setState({products:JSON.parse(localStorage.getItem("salesExecutive")),
            addProductsModelOpen:false,addFirstName:"",addLastName:"",addDOB:"",addGender:"",addYOE:"",addPassword:""});
            return alert("sales Executive details added");
        }
    }
    handleSearchValue=(e)=>{
        this.setState({searchValue:e.target.value},this.handleSearchValueChange);
    }
    handleSearchValueChange=()=>{
       const {searchValue}=this.state;
       const orgProducts=JSON.parse(localStorage.getItem("salesExecutive"));
        const updatedProduct=orgProducts.filter(({FirstName,LastName})=>{
            let searchProduct;
                if(searchProduct=FirstName.toLowerCase().includes(searchValue.toLowerCase()) || LastName.toLowerCase().includes(searchValue.toLowerCase())){
                    return searchProduct;
                }
        })
         this.setState({products:updatedProduct}); 
    }

    render() { 
        const {products,searchValue,addProductsModelOpen,addFirstName,addLastName,addDOB,addYOE,addPassword,
            editModelOpen,updateFirstName,updateLastName,updateDOB,updateGender,updateYOE,updatePassword}=this.state;
       
        
        
        return (
                
                <>
                <Headers userName={"Admin"}/>
                <div id="search-div">
                <input type="text" onChange={(e)=>this.handleSearchValue(e)} value={searchValue} placeholder="Search By name"/>
                <i className="fas fa-search" id="search-icon"></i>
                </div>
                <div id="product-wraper">
                <div id="headding">Sales Executive Team</div>
                <button id="add-products" onClick={this.handleAddProducts}>Add Products</button>
                </div>
                <div className="d-flex flex-wrap justify-content-center card-wrapper">
                {products.length !==0 ? products.map((item,index)=>{
                   return <div className="card m-2" key={index} style={{width: 18 +"rem"}}>
                
                    <div className="card-body">
                        <h5 className="card-title product-card-brand">FirstName: {item.FirstName}</h5>
                        <p className="card-text product-card-brand">LastName: {item.LastName}</p>
                        <p className="card-text product-card-brand">DOB: {item.DOB}</p>
                        <p className="card-text product-card-brand">Gender: {item.Gender}</p>
                        <p className="card-text product-card-brand">Experience: {item.YOE}Y</p>
                        <p className="card-text product-card-brand">PassWord: {item.PassWord}</p>
                        <i className="fas fa-edit" style={{marginLeft:190+"px"}} onClick={()=>this.handleEdit(item)}></i>
                        <i className="fas fa-trash" style={{marginLeft:20+"px"}} onClick={()=>this.handleDelete(item)}></i>
                    </div>
                </div>
                }):<h6 style={{color:"red"}}>Product Not Found</h6>}
                
                </div>
                <Modal
                    isOpen={addProductsModelOpen}
                    style={customStyles}
                >
                        
                    <div id="Update">
                        <h2>Sales Executive Details</h2>
                        <label id="userName">FirstName: :
                        <input type="text" required value={addFirstName} onChange={(event)=>this.handlechange(event,'addFirstName')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate move">LastName :
                        <input type="text" required value={addLastName} onChange={(event)=>this.handlechange(event,'addLastName')} className="input-field"/>
                        </label>
                        <br></br>
                        
                        <label className="userupdate movestock">Gender :
                        <label for="Male">
                            <input type="radio" id="Male" name="gender"  required  onChange={()=>this.handleStockChange('Male')} className="input-field"/>Male
                        </label>
                        <label for="Female">
                            <input type="radio" id="Female" name="gender"  required   onChange={()=>this.handleStockChange('Female')} className="input-field"/>Female<br></br>
                        </label>
                        </label>
                        <br></br>
                        <label className="userupdate">DOB :
                        <input type="date" required value={addDOB} onChange={(event)=>this.handlechange(event,'addDOB')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate">Experience :
                        <input type="Number" required value={addYOE} onChange={(event)=>this.handlechange(event,'addYOE')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate">PassWord :
                        <input type="text" required value={addPassword} onChange={(event)=>this.handlechange(event,'addPassword')} className="input-field"/>
                        </label>
                        <br></br>
                        <button id="btn-cancel" onClick={this.handledetailscancel}>Cancel</button>
                        <button id="log-signin-btn" onClick={this.handleAdd}>Add</button>
                           
                    </div>
                </Modal> 
            
                
                 
                <Modal
                    isOpen={editModelOpen}
                    style={customStyles}
                >
                        
                    <div id="Update">
                        <h2>Update</h2>
                        <label id="userName">FirstName :
                        <input type="text" required value={updateFirstName} onChange={(event)=>this.handlechange(event,'updateFirstName')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate ">LastName :
                        <input type="text" required value={updateLastName} onChange={(event)=>this.handlechange(event,'updateLastName')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate">DOB :
                        <input type="text" required value={updateDOB} onChange={(event)=>this.handlechange(event,'updateDOB')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate">Gender :
                        <input type="text" required value={updateGender} onChange={(event)=>this.handlechange(event,'updateGender')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate">Experience :
                        <input type="text" required value={updateYOE} onChange={(event)=>this.handlechange(event,'updateYOE')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate">PassWord :
                        <input type="text" required value={updatePassword} onChange={(event)=>this.handlechange(event,'updatePassword')} className="input-field"/>
                        </label>
                        <br></br>
                        <button id="btn-cancel" onClick={this.handleUpdatecancel}>Cancel</button>
                        <button id="log-signin-btn" onClick={this.handleUpdate}>Update</button>
                           
                    </div>
                </Modal> 
                </>
        );
    }
}
 
export default Sales;