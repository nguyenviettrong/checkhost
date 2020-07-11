import React, { Fragment } from 'react';
import {
  Link
} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import flag from '../../assets/images/vn-flag.jpg';
import '../../assets/css/theme.css';

function Header(props) {
    return (
        <Fragment>
            <header className="mt-2">
			    <div className="container">
			        <Link to="/"><img src={logo} alt="Logo" className="w-100 mb-1" /></Link>
			        <div className="bg-d3c074 p-1 rounded">
			            <span className="font-weight-bold mr-1">IP: </span>
			            <a href="#" className="text-white mr-1"><u>171.227.19.29</u></a> 
			            <span className="font-weight-bold mr-1">Country:</span> 
			            <img src={flag} alt="Viet Nam" width={20} className="mr-1"/>
			            <span>Viet Nam (Hanoi, Hanoi)</span>
			        </div>
			        <div className="mt-3 px-2 pt-3 py-2 border rounded">
			            <input type="text" className="form-control max-width-350 mx-auto h-auto py-0" name="host" placeholder="Hostname or IP address" />
			            <div className="mt-3 flex-wrap d-flex align-items-center justify-content-center">
			                <Link to="/ip-info" className="btn btn-white border py-0 mr-4 mb-2 shadow">
			                Info</Link>
			                <Link to="/check-ping" className="btn btn-white border py-0 mr-4 mb-2 shadow">
			                Ping</Link>
			                <Link to="/check-http" className="btn btn-white border py-0 mr-4 mb-2 shadow">
			                HTTP</Link>
			                <Link to="/check-tcp" className="btn btn-white border py-0 mr-4 mb-2 shadow">
			                TCP port</Link>
			                <Link to="/check-udp" className="btn btn-white border py-0 mr-4 mb-2 shadow">
			                UDP port</Link>
			                <Link to="/check-dns" className="btn btn-white border py-0 mb-2 shadow">
			                DNS</Link>
			            </div>
			        </div>
			    </div>
			</header>
        </Fragment>
    );
}

export default Header