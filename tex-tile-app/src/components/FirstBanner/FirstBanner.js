import React, {Component} from 'react';
import './FirstBanner.css'
import Second from "../../assets/image/banner 2.jpg"
import FirstImage from "../../assets/image/2nd banner.jpg"

import { Link } from "react-router-dom";

class FirstBanner extends Component {
    render() {
        return (

                <div className="first_banner_container">
                    {/*<div className="first_banner_img">*/}
                    {/*    <Link to="">*/}
                    {/*        <img src={FirstImage} alt="none"/>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            {/*<li data-target="#myCarousel" data-slide-to="2"></li>*/}
                        </ol>

                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={Second} alt="Los Angeles"/>
                            </div>

                            <div className="item">
                                <img src={FirstImage} alt="Chicago"/>
                            </div>

                            {/*<div className="item">*/}
                            {/*    <img src="ny.jpg" alt="New York"/>*/}
                            {/*</div>*/}
                        </div>


                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
        );
    }
}

export default FirstBanner;