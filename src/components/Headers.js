import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export class Headers extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }

   
    render() {
        
        const {userName}=this.props;
        
        return (
            <div id="topbar-navigation">
                <nav className="navbar navbar-expand-lg navbar-light topbar">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/Manager">Pharmacy</Link>
                        
                        <div className="d-flex align-items-center">
                                
                                <i className="fas fa-user-circle user-logo">{userName}</i>
                        
                        <button className="navbar-toggler" type="button" onClick={this.sidebar} id="menu-bar" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Headers;
