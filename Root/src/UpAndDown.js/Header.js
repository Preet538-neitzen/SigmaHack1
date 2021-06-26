import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
            <header id="topnav" class="defaultscroll sticky nav-sticky">
            <div class="container">
           
                <div>
                <Link to="/">
                        <a class="logo" href="index.html">CFG<span class="text-primary">.</span></a>
                    </Link>
                </div>                 
                <div class="buy-button">
                    <a href="https://1.envato.market/4n73n" target="_blank" class="btn btn-primary">{this.props.name}</a>
                </div>
          
        
                
            </div>
        </header>
            </div>
        )
    }
}

export default Header
