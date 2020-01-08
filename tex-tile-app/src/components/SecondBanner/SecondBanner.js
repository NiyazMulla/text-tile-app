import React, { Component } from 'react';
import "./SecondBanner.css"
import sec_one_image from "../../assets/image/sec_one_image.jpg"
import sec_two_image from "../../assets/image/sec_two_image.jpg"
import Axios from "../../Api/Api";
import history from "../../history";
import Loading from "../Loading/Loading"

class SecondBanner extends Component {


    state = {
        loader : false,
    }

    getProduct1 = () => {
        this.setState({loader:true})
        setTimeout(this.hitAPI1,500)
        // this.hitAPI1();
    };

    hitAPI1 = () => {
        // sessionStorage.removeItem('loading');
        const url ="/product.php";
        const formData = {
            "category_id":"1"
        };
        Axios.post(url,formData).then(
            response => {
                console.log(response);
                if(response.data.length > 0){
                    sessionStorage.setItem("product",JSON.stringify(response.data));
                    // sessionStorage.removeItem('loading');
                    window.location.href="/products_list"
                }
                else {
                    alert("No product in this category");
                }
            }
        )
    }

    getProduct2 = () => {
        this.setState({loader:true})
        setTimeout(this.hitAPI2,500)
    };

    hitAPI2 = () => {
        const url ="/product.php";
        const formData = {
            "category_id":"2"
        };
        Axios.post(url,formData).then(
            response => {
                console.log(response)
                if(response.data.length > 0){
                    sessionStorage.setItem("product",JSON.stringify(response.data));
                    // history.push("/products_list/4")
                    window.location.href="/products_list";
                }
                else {
                    alert("No product in this category");
                }
            }
        )
    }


    render() {
        return (
            <div className="second_banner_container">
                <h3>New In</h3>
                <div className="second_banner_content_main">
                    <div className="second_banner_content" onClick={this.getProduct1}>
                            <div className="second_banner_content_image">
                                <div className="second_banner_content_image_1">
                                    <img src={sec_one_image} alt="none"  />
                                </div>
                            </div>
                            <div className="second_banner_content_shop_now_text">
                                <b>MOD checks shirt</b>
                            </div>
                            <div className="second_banner_content_shop_now" onClick={this.getProduct1}>
                                Shop Now
                            </div>
                    </div>
                    <div className="second_banner_right_content"  onClick={this.getProduct2} >
                        <div className="second_banner_right_content_image">
                            <div className="second_banner_content_image_1">
                                <img src={sec_two_image} alt="none"  />
                            </div>
                        </div>
                        <div className="second_banner_right_content_shop_now_text">
                            <b>MOD checks shirt</b>
                        </div>
                        <div className="second_banner_right_content_shop_now" onClick={this.getProduct2}>
                            Shop Now
                        </div>
                    </div>
                </div>
                <div className="second_banner_footer_content">
                    <h2>MODVOLK</h2>
                    <p>Celebrating the new generation gentlemen</p>
                </div>
                {
                    this.state.loader ? 
                    <Loading/>
                    :null
                }
            </div>
        );
    }
}

export default SecondBanner;