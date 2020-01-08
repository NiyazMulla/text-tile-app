import React, {Component} from 'react';
import './ProductsDisplay.css'
class ProductsDisplay extends Component {

    constructor(props){
        super(props);
        window.scroll({top:0});
        this.state = {
            products : []
        }
    }

    componentWillMount() {
        setTimeout(this.getProducts,1000)
    };

    getProducts = () => {
       // sessionStorage.removeItem('loading');
        console.log(JSON.parse(sessionStorage.getItem("product")));
        this.setState({products :JSON.parse(sessionStorage.getItem("product")) })
        // setTimeout(this.disabelLoder,300)
    };

    disabelLoder = () => {
        console.log("disable")
        sessionStorage.removeItem('loading');
    }
    componentDidMount() {

    }


    render() {
        let products = "";
        if(this.state.products.length > 0){
            products =this.state.products.map(data => {
                return(
                    <div className="category_product_container">
                        <div className="category_product_image">
                         <a href={`/products_list/product-view`}  onClick={() => sessionStorage.setItem("product_id",data.product_id)}>
                                <img src={data.product_image} alt="PRODUCT"/>
                                </a>
                        </div>
                        <div className="category_product_footer">
                            <h6>{data.product_name}</h6>
                            <p><strike>&#8377;{data.MRP}</strike><span> &#8377;{data.sale_price}</span></p>
                        </div>
                    </div>
                
                )
            })
        }
        return (
            <div className="product_display">
                {products}
            </div>
        );
    }
}

export default ProductsDisplay;