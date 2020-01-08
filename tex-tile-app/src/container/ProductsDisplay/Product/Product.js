import React, {Component} from 'react';
import "./Product.css"
import  Product1 from "../../../assets/image/Products/Screenshot from 2019-09-08 08-04-23.png";
import Product2 from "../../../assets/image/Products/Screenshot from 2019-09-08 08-04-38.png";
import Product3 from "../../../assets/image/Products/Screenshot from 2019-09-08 08-05-04.png";
class Product extends Component {
    render() {
        let products = "";
        if(this.props.product_list.length > 0){
            products =this.props.product_list.map(data => {
                return(
                    <div className="category_product_container">
                        <div className="category_product_image">
                            <a to={`/category/${this.props.id}`} target="_blank">
                                <img src={data.product_image} alt="PRODUCT"/>
                            </a>
                        </div>
                        <div className="category_product_footer">
                            <h6>{data.product_name}</h6>
                            <p><strike>&#8377;{data.sale_price}</strike><span> &#8377;{data.MRP}</span></p>
                        </div>
                    </div>
                )
            })
        }

       return(
        <div>
            {products}
        </div>
       )
    }
}

export default Product;