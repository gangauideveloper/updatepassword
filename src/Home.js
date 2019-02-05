import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Home extends Component {
  render() {
    return (
      	<div className="App">
	    	<a href="#modal" class="modal-open">Login</a>
		    <div className="modal" id="modal">
		      	<div className="modal-contant">
			  		<a href="#" className="model-close">&times;</a>
			      	<h2 className="modal-heading">Login</h2>
			      	<form  method="get">
			      		<div className="inputbox">
			      			<input type="email"required />
			      			<label>Username</label>
			      		</div>
			      		<div className="inputbox">
			      			<input type="Password" required/>
			      			<label>Password</label>
			      		</div>
			      		<input type="submit" value="Login" />
			      	</form>	
				</div>
	    	</div>
      	</div>
    );
  }
}

export default Home;
	