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


class Medicine extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            length:0,
            editModelOpen:false,
            updateName:"",
            updatemanu:"",
            updateStock:"",
            updateDiscount:"",
            updatePrice:"",
            tempObj:{},
            products:[],
            addProductsModelOpen:false,
            addName:"",
            addmanu:"",
            addDiscount:"",
            addPrice:"",
            addStock:"",
            searchValue:""
        }
    }
    componentDidMount(){
        
        this.setState({products:JSON.parse(localStorage.getItem("products"))})
    }
    handlechange=(event,state)=>{
        this.setState({[state]:event.target.value})
    }
    handleEdit=(item)=>{
        this.setState({editModelOpen:true,tempObj:item,updateName:item.name,updatemanu:item.Manuname,
        updateStock:item.stock===true?"Stock In":"Stock Out",updateDiscount:item.Discount,updatePrice:item.price})
    }
    handleUpdatecancel=()=>{
        this.setState({editModelOpen:false});
    }
    handleUpdate=()=>{
        const {tempObj,updateName,updatemanu,updateStock,updateDiscount,updatePrice}=this.state;
        let pos=-1;
        let localProduct=JSON.parse(localStorage.getItem("products"));
        localProduct.map((item,index)=>{
            if(item.name===tempObj.name && item.Manuname===tempObj.Manuname && item.price===tempObj.price &&
                item.stock===tempObj.stock && item.Discount===tempObj.Discount){
                pos=index;
            }
        })
        let newObj={
            name:updateName,
            Manuname:updatemanu,
            price:updatePrice,
            stock:updateStock,
            Discount:updateDiscount
        }
        let v= localProduct.splice(pos,1,newObj);
        this.setState({products:localProduct,editModelOpen:false,searchProduct:localProduct});
        localStorage.setItem("products",JSON.stringify(localProduct));
        
        
    }
    handleDelete=(itemDelete)=>{
        let localProducts=JSON.parse(localStorage.getItem("products"));
        let pos=-1;
        localProducts.map((item,index)=>{
            if(item.name===itemDelete.name && item.Manuname===itemDelete.Manuname && item.price ===itemDelete.price
                && item.stock===itemDelete.stock && item.Discount===itemDelete.Discount){
                pos=index;
            }
        })
        if(pos>-1){
            localProducts.splice(pos,1);
            this.setState({products:localProducts});
            localStorage.setItem("products",JSON.stringify(localProducts));
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
        if(value==='false'){
            this.setState({addStock:false});
        }else{
            this.setState({addStock:true});
        }
        
    }
    handleAdd=()=>{
        const {addName,addmanu,addStock,addDiscount,addPrice}=this.state;
    
        let addProducts=JSON.parse(localStorage.getItem("products"));
        var pos=-1;
       if(!addName|| !addmanu|| !addStock || !addDiscount|| !addPrice){
           return alert("all fields required");
       }
        for(var i=0;i<addProducts.length;i++){
            console.log(addProducts[i].name,addName,addProducts[i].Manuname,addmanu,addProducts[i].stock,addStock,
                addProducts[i].price,Number(addPrice),addProducts[i].Discount,Number(addDiscount))
            if(addProducts[i].name===addName && addProducts[i].Manuname===addmanu && Number(addProducts[i].price)===Number(addPrice)
            && addProducts[i].stock===addStock && Number(addProducts[i].Discount)===Number(addDiscount)){
                    
                    pos=i;
            
            }
        }
        if(pos>-1){
            this.setState({addProductsModelOpen:false,addName:"",addmanu:"",addPrice:"",addStock:"",addDiscount:""});
           return alert("Product is  already exist")
        }else{
            addProducts.push({
                name:addName,
                Manuname:addmanu,
                price:addPrice,
                stock:addStock,
                Discount:addDiscount
            })
            localStorage.setItem("products",JSON.stringify(addProducts));
            this.setState({products:JSON.parse(localStorage.getItem("products")),
            addProductsModelOpen:false,addName:"",addmanu:"",addPrice:"",addStock:"",addDiscount:""});
            return alert("Product Added");
        }
    }
    handleSearchValue=(e)=>{
        this.setState({searchValue:e.target.value},this.handleSearchValueChange);
    }
    handleSearchValueChange=()=>{
       const {searchValue}=this.state;
       const orgProducts=JSON.parse(localStorage.getItem("products"));
        const updatedProduct=orgProducts.filter(({Manuname})=>{
            let searchProduct;
                if(searchProduct=Manuname.toLowerCase().includes(searchValue.toLowerCase()) ){
                    return searchProduct;
                }
        })
         this.setState({products:updatedProduct}); 
    }

    render() { 
        const {products,searchValue,addProductsModelOpen,addName,addmanu,addDiscount,addPrice,editModelOpen,updateName,updatemanu,updateStock,updateDiscount,updatePrice}=this.state;
       
        
        
        return (
                
                <>
                <Headers userName={"Admin"}/>
                <div id="search-div">
                <input type="text" onChange={(e)=>this.handleSearchValue(e)} value={searchValue} placeholder="Search By name"/>
                <i className="fas fa-search" id="search-icon"></i>
                </div>
                <div id="product-wraper">
                <div id="headding">Products</div>
                <button id="add-products" onClick={this.handleAddProducts}>Add Products</button>
                </div>
                <div className="d-flex flex-wrap justify-content-center card-wrapper">
                {products.length !==0 ? products.map((item,index)=>{
                   return <div className="card m-2" key={index} style={{width: 18 +"rem"}}>
                
                    <div className="card-body">
                        <h5 className="card-title product-card-title">Name: {item.name}</h5>
                        <p className="card-text product-card-brand">Manufactured by: {item.Manuname}</p>
                        <p className="card-text product-card-brand">Stock: {item.stock===true?"Stock In":"Stock Out"}</p>
                        <p className="card-text product-card-brand">Discount: {item.Discount}%</p>
                        <p className="card-text prouct-card-cost">Price: {item.price} Rs</p>
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
                        <h2>Product Details</h2>
                        <label id="userName">Name :
                        <input type="text" required value={addName} onChange={(event)=>this.handlechange(event,'addName')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate move">Manufactured by :
                        <input type="text" required value={addmanu} onChange={(event)=>this.handlechange(event,'addmanu')} className="input-field"/>
                        </label>
                        <br></br>
                        
                        <label className="userupdate movestock">Stock :
                        <label for="stockin">
                            <input type="radio" id="stockin" name="stock"  required  onChange={()=>this.handleStockChange('true')} className="input-field"/>True
                        </label>
                        <label for="stockout">
                            <input type="radio" id="stockout" name="stock"  required   onChange={()=>this.handleStockChange('false')} className="input-field"/>False<br></br>
                        </label>
                        </label>
                        <br></br>
                        <label className="userupdate">Discount :
                        <input type="Number" required value={addDiscount} onChange={(event)=>this.handlechange(event,'addDiscount')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate">Price :
                        <input type="Number" required value={addPrice} onChange={(event)=>this.handlechange(event,'addPrice')} className="input-field"/>
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
                        <label id="userName">Name :
                        <input type="text" required value={updateName} onChange={(event)=>this.handlechange(event,'updateName')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate move">Manufactured by :
                        <input type="text" required value={updatemanu} onChange={(event)=>this.handlechange(event,'updatemanu')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate">Stock :
                        <input type="text" required value={updateStock} onChange={(event)=>this.handlechange(event,'updateStock')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate">Discount :
                        <input type="text" required value={updateDiscount+"%"} onChange={(event)=>this.handlechange(event,'updateDiscount')} className="input-field"/>
                        </label>
                        <br></br>
                        <label className="userupdate">Price :
                        <input type="text" required value={updatePrice} onChange={(event)=>this.handlechange(event,'updatePrice')} className="input-field"/>
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
 
export default Medicine;