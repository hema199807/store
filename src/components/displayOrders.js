import React, {Component} from 'react';
import '../styles/Exicutive.css';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            cart:[]
        }
    }
    componentDidMount(){

        this.setState({cart:JSON.parse(localStorage.getItem("order"))})
    }
    handleBack=()=>{
        this.props.history.push('/order');
    }
    handleBacktosignup=()=>{
        this.props.history.push('/');
    }
    render() { 
        const {cart}=this.state;
        return ( 
             
            <div>
                <button style={{marginLeft:6+"%",marginTop: 5+"%"}} onClick={this.handleBack}>Back</button>
                <button style={{marginLeft:6+"%"}} onClick={this.handleBacktosignup}>Back to signUp</button>
                 <h2 style={{marginLeft:45+"%"}}>Order Details</h2>
                 <div  className="d-flex flex-wrap justify-content-center card-wrapper">
                 {cart.length && cart.map((item,index)=>{
                   return <div className="card-order m-2" key={index} style={{width: 30 +"rem"}}>
                    <div className="card-body">
                        <h5 className="card-title product-card-title">Executive Name: {item.Executivename}</h5>
                        <h5 className="card-title product-card-title">PassWord: {item.password}</h5>
                        <h5 className="card-title product-card-title">OrderId: {item.orderId}</h5>
                        <div>
                        Product Details:
                        <h5 className="card-title product-card-title">Name: {item.name}</h5>
                        <p className="card-text product-card-brand">Manufactured by: {item.Manuname}</p>
                        <p className="card-text product-card-brand">Stock: {item.stock===true?"Stock In":"Stock Out"}</p>
                        <p className="card-text product-card-brand">Discount: {item.Discount}%</p>
                        <p className="card-text prouct-card-cost">Price: {item.price} Rs</p>
                        <p className="card-text product-card-brand">Quantity: {item.count}</p>
                        </div>
                    </div>
                </div>
                })}
                </div>
            </div>
        );
    }
}
 
export default Display;