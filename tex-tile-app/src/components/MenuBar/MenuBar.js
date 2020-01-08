import React, {Component} from 'react';
import './MenuBar.css'
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import "./MenuBar.css"

class MenuBar extends Component {
    render() {
        return (
            <div className="menu_bar_container">
                <div className="menu_bar_left_content">
                    {/*<a onClick={()=> alert("Page need to be implement")} href="#" >Men</a>*/}
                    {/*<a onClick={()=> alert("Page need to be implement")} href="#">Season</a>*/}
                    {/*<a onClick={()=> alert("Page need to be implement")} href="#">Our Story</a>*/}
                    {/*<a onClick={()=> alert("Page need to be implement")} href="#">Contact Us</a>*/}
                </div>
                <div className="menu_bar_logo">
                    <Link to="/" > <Logo/></Link>
                </div>
                {/*<div className="menu_bar_right_content">*/}
                {/*    <i className="fas fa-search"/>*/}
                {/*    <i className="fas fa-map-marker-alt"/>*/}
                {/*    <i className="far fa-user"/>*/}
                {/*    <i className="fas fa-shopping-cart"/>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default MenuBar;