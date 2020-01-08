import React, {Component} from 'react';
import './FourthBanner.css'
import Axios from "../../Api/Api";
import fourthBanner from "../../assets/image/fourthbanner.png"
import history from "../../history";
import Loading from '../Loading/Loading';


class FourthBanner extends Component {

    state = {
        loader :false,
    }

    getProduct = () => {
        this.setState({loader:true})
        setTimeout(this.hitAPI4,500)
    };

    hitAPI4 = () => {
        const url ="/product.php";
        const formData = {
            "category_id":"4"
        };
        Axios.post(url,formData).then(
            response => {
                console.log(response);
                if(response.data.length > 0){
                    console.log("entered");
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
            <div className="fourth_banner_container">
                <div className="fourth_banner_container_image">
                    <div className="fourth_banner_container_image_inner">
                        <img src={fourthBanner} alt="none" onClick={this.getProduct}/>
                    </div>
                </div>
                <div className="fourth_banner_content">
                    <div className="fourth_banner_right_header">

                        The
                        Holiday
                        Checks
                    </div>
                    <div className="fourth_banner_right_content">
                        {/*<h3> Truly One of a Kind.</h3>*/}
                        <p> Whether you’re staying near or venturing far,
                            make this winter your best dressed yet.</p>
                    </div>
                </div>
                {
                    this.state.loader ? <Loading/> : null
                }
            </div>
        );
    }
}

export default FourthBanner;