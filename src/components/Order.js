import React, {Component} from 'react';
import '../styles/Exicutive.css';
import {withRouter} from 'react-router-dom';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            product:[],
            cart:[]
        }
    }
    componentDidMount(){

        this.setState({product:JSON.parse(localStorage.getItem("products"))})
    }
    handleAddtoOrders=(item)=>{
        const {Firstname,password}=this.props;
        var createOrder=JSON.parse(localStorage.getItem("order"))===null?[]:JSON.parse(localStorage.getItem("order"));
        var pos=-1;
        for(var i=0;i<createOrder.length;i++){
            if(createOrder[i].name==item.name && createOrder[i].Manuname==item.Manuname){
                pos=i;  
            }
        }
        if(pos>-1){
            createOrder[pos].count+=1;
        }else{
            item.orderId=new Date();
            item.count=1;
            item.Executivename=Firstname;
            item.password=password;
            createOrder.push(item);
            localStorage.setItem("order",JSON.stringify(createOrder));
        }

    }
    handleShowdetails=()=>{
        this.props.history.push('/display');
    }
    render() { 
        const {product}=this.state;
        return ( 
             
            <div id="order">
                <button style={{marginLeft:6+"%"}} onClick={this.handleShowdetails}>Show Orders</button>
                <h2 style={{marginLeft:6+"%"}}>create Order</h2>
                 <div className="d-flex flex-wrap justify-content-center card-wrapper">
                 {product.length && product.map((item,index)=>{
                   return <div className="card m-2" key={index} style={{width: 18 +"rem"}}>
                
                    <div className="card-body">
                        <h5 className="card-title product-card-title">Name: {item.name}</h5>
                        <p className="card-text product-card-brand">Manufactured by: {item.Manuname}</p>
                        <p className="card-text product-card-brand">Stock: {item.stock===true?"Stock In":"Stock Out"}</p>
                        <p className="card-text product-card-brand">Discount: {item.Discount}%</p>
                        <p className="card-text prouct-card-cost">Price: {item.price} Rs</p>
                        <button onClick={()=>this.handleAddtoOrders(item)} id="add-order">Add</button>
                    </div>
                </div>
                })}
                </div>
            </div>
        );
    }
}
 
export default withRouter(Order);