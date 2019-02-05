import React, { Component } from 'react';
import './Update.css';
class Update extends Component {
  render() {
    return (
      	<div className="">
	      	<a href="#UpdatePassword" className="open">Update Password</a>
	      	<div className="main" id="UpdatePassword">
	      		<div className="maincontant">
	      			<a href="#" className="close">&times;</a>
	      			<h2 className="heading">Update Password</h2>
	      			<form method="get">
		      			<div className="inputbox">
		      			    <input type="Password" pattern="[A-Za-z]{8}" required />
		      				<label>Current Password</label>
		      			</div>
		      			<div className="inputbox">
		      				<input type="Password" pattern="[A-Za-z]{8}" required/>
		      				<label>New Password</label>
		      			</div>
		      			<div className="inputbox">
			      			<input type="Password" pattern="[A-Za-z]{8}" required/>
			      			<label>Confirm Password</label>
		      			</div>
		      			<input type="submit" value="Update Password"/>	
		      		</form>
	      		</div>  			
	      	</div>	      		
      	</div>
    );
  }
}

export default Update;
