import React from 'react'
import "./Header.styles.scss"
import logo from "../../image/play logo.png"
import search from "../../image/Search.png"

function Header() {
    return (
        <div className="header">

            <div >
<img className="logo" src={logo}/>
            </div>

            <div className="header-search">
            <input className="input" type="email" placeholder="Search"/>


            <button className="search-button">
                <img className="search-image" src={search} />
            </button>
            </div>
           
        </div>
    )
}

export default Header
