import React, {Component} from 'react';
import Update from './Update';
import './MyAccount.css';
import {BrowserRouter as Router, Route, Link , withRouter} from 'react-router-dom';

class MyAccount extends Component{
	render(){
		return(
			<div class="">
        <nav>
        <img src="0.jpg"/>
        </nav>
        <div className="nav">
          <ul>
            <li><a href="#">Account Details</a></li>
            <li><a href="#">Check Balance </a></li>
           <Link to ="/Login" className="signuplink"><span className="Create"><li><a href="#">Update Password</a></li></span></Link> 
            <li><a href="#">Sign out</a></li>
          </ul>
       </div>
        
			</div>
		);
	}
}
export default MyAccount;