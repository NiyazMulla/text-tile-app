import React, {Component} from 'react';
import "./ThirdBanner.css"
import thirdBanner from "../../assets/image/thirdbanner.png"
import Axios from "../../Api/Api";
import Loading from '../Loading/Loading';

class ThirdBanner extends Component {


    state = {
        loader: false,
    }

    getProduct = () => {
       this.setState({loader:true})
       setTimeout(this.hitAPI3,500)
    };

    hitAPI3 = () => {
        const url ="/product.php";
        const formData = {
            "category_id":"3"
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
            <div className="third_banner_container">
                <div className="third_banner_left_part">
                    <div className="third_banner_left_header">
                        WASHED INDIGO
                    </div>
                    <div className="third_banner_left_content">
                        <h3> Truly One of a Kind.</h3>
                        <p> You simply won’t find washed indigo
                            shirts like this anywhere else.</p>
                    </div>
                    <div className="button_class" onClick={this.getProduct}>
                        <button className="button_class_view"> view </button>
                        <button className="button_class_collection"> collection</button>
                    </div>
                </div>
                <div className="third_banner_right_part">
                    <div className="third_banner_right_part_image">
                        <img src={thirdBanner} alt="none" onClick={this.getProduct} />
                    </div>
                </div>
               {
                   this.state.loader ?  <Loading/> :null
               }
            </div>
        );
    }
}

export default ThirdBanner;