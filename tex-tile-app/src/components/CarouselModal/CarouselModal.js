import React, {Component} from 'react';
import './CarouselModal.css'


class CarouselModal extends Component {
    render() {
        return (
            <div className="container" >
                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/8/29/eb1e0df8-7525-464a-8891-3d6833e5ea911567078495646-Highlander.jpG" alt="Los Angeles" />
                        </div>

                        <div className="item">
                            <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/8/29/eb1e0df8-7525-464a-8891-3d6833e5ea911567078495646-Highlander.jpG" alt="Chicago" />
                        </div>

                        <div className="item">
                            <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/8/29/eb1e0df8-7525-464a-8891-3d6833e5ea911567078495646-Highlander.jpG" alt="New york"/>
                        </div>
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

export default CarouselModal;