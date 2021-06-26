import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
            <header id="topnav" class="defaultscroll sticky">
                <div class="container">
                    {/*Logo container */}
                    <div>
                        <Link to="/UserSignIn">
                            <a class="logo" href="index.html">Devi<span class="text-danger">.</span></a>
                        </Link>
                    </div>                 
                    <div class="buy-button">
                        <Link to="/UserSignIn">
                            <a href="#" target="_blank" class="btn btn-primary mr-5">Home</a>
                        </Link>
                        {/* <a href="#" target="_blank" class="btn btn-primary">{user!="" ? "Logout" : "Login"}</a> */}
                    </div>{/*end login button */}
                    {/*End Logo container */}
                </div>{/*end container */}
            </header>{/*end header */}
            </div>
        )
    }
}

export default Header
