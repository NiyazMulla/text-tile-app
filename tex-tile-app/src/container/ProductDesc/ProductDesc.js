import React, {Component} from 'react';
import "./ProductDesc.css"
import Axios from "../../Api/Api"


class ProductDesc extends Component {

    constructor(props){
        super(props);
        window.scroll({top:'0'})
    }

    state = {
        product_id : "",
        product_name: "",
        MRP: "",
        sale_price: "",
        size : [
            {
                "size" : "S",
                "status":"",
                "active":false
            },
            {
                "size" : "M",
                "status" : "",
                "active":false
            },
            {
                "size" : "L",
                "status" : "",
                "active":false
            },
            {
                "size" : "XL",
                "status" : "",
                "active":false
            },
        ],
        image_path: "../../assets/image/Products/ProductDesc/Screenshot from 2019-09-08 07-49-59.png",
        thumbnail_images : [
            {
                "address" : '../../assets/image/Products/ProductDesc/Screenshot from 2019-09-08 07-50-18.png'
            },
            {
                "address" : '../../assets/image/Products/ProductDesc/Screenshot from 2019-09-08 07-50-28.png'
            },
            {
                "address" : '../../assets/image/Products/ProductDesc/Screenshot from 2019-09-08 07-50-38.png'
            },
            {
                "address" : '../../assets/image/Products/ProductDesc/Screenshot from 2019-09-08 07-50-48.png'
            }
        ],
        image1 : "",
        image2 : "",
        image3 : "",
        image4 : "",
        image5 : "",
        link : "",

    };

    componentWillMount() {
        this.setState({image_path:"../../assets/image/Products/ProductDesc/Screenshot from 2019-09-08 07-49-59.png"})
        console.log("log")
        const url = "/product_description.php"
        const formData = {
            product_id : sessionStorage.getItem("product_id"),
        }
        Axios.post(url,formData)
        .then(response => {
            console.log(response);
            if(response.data.product_id){
                this.setState({
                    product_id : response.data.product_id,
                    product_name: response.data.product_name,
                    MRP: response.data.MRP,
                    sale_price: response.data.sale_price,
                    display_image : response.data.image1,
                    image1 : response.data.image1,
                    image2 : response.data.image2,
                    image3 : response.data.image3,
                    image4 : response.data.image4,
                    image5 : response.data.image5,
                    link : response.data.link
                    
                })
            }
        }).catch(err => {
            console.log(err)
        })
    }

    handlerForSelectedSize = (i,e) => {
        console.log(i);
        let size = [...this.state.size];
        console.log(size.length);
        for (let j=0 ;j<size.length;j++){
            size[j].active = false;
        }
        size[i].active = true;
        this.setState({size},() => console.log(this.state.size))
    };

    imageSelector = (selectedImage) => {
        this.setState({display_image:selectedImage})
    };

    render() {
        let size_list = "";
        if(this.state.size.length > 0 ){
            size_list = this.state.size.map((data,i) => {
                return(
                    <div>
                        {data.active  ?

                            <div className="active" onClick={this.handlerForSelectedSize.bind(this,i)}>
                                <p>{data.size}</p>
                                {
                                    data.status ?  <div>
                                            <i className="far fa-envelope"/> {data.status}
                                        </div>
                                        :null
                                }
                            </div>
                             :
                            <div className="size_info" onClick={this.handlerForSelectedSize.bind(this,i)}>
                                <p>{data.size}</p>
                                {
                                    data.status ?  <div>
                                            <i className="far fa-envelope"/> {data.status}
                                        </div>
                                        :null
                                }
                            </div>
                        }
                    </div>
                )
            })
        }

        let thumbnails = "";
        thumbnails = this.state.thumbnail_images.map(data => {
            return(
                <img src={data.address} alt="thumbnail-image"/>
            )
        })

        return (
            <div className="product_desc_container">
                <div className="product_desc_view_product">
                   <div className="product_desc_image">
                       <img src={this.state.display_image} alt="none"/>
                   </div>
                    <div className="product_desc_content">
                        <div className="product_desc_content_mrp">
                        <span><strike style={{color:'red'}}>&#8377;{this.state.MRP}</strike> &nbsp;&#8377; {this.state.sale_price}</span>
                        <h6>MRP incl of all taxes</h6>
                        <p>{this.state.product_name}</p>
                        </div>
                        <div className="product_desc_content_size_box">
                            {/*<div className="size_info">*/}
                            {/*    <p>S</p>*/}
                            {/*    <div>*/}
                            {/*        <i className="far fa-envelope"/> Coming Soon*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="size_info">*/}
                            {/*    <p>M</p>*/}
                            {/*</div>*/}
                            {/*<div className="size_info">*/}
                            {/*    <p>L</p>*/}
                            {/*</div>*/}
                            {/*<div className="size_info">*/}
                            {/*    <p>XL</p>*/}
                            {/*</div>*/}
                            {size_list}
                            <div className="product_desc_content_size_box_footer">
                                <i className="far fa-envelope"/> We'll let you know when it's in stock
                            </div>
                        </div>
                        <div className="size_button">
                            <p>WHAT'S MY SIZE? <i className="fas fa-question-circle"/> </p>
                        </div>
                        <a className="add" href={this.state.link} target="_blank">
                            <button>Link</button>
                        </a>
                    </div>
                </div>
                <div className="product_desc_image_bottom">
                    <img src={this.state.image1} alt="thumbnail-image" onClick = {() => this.imageSelector(this.state.image1)}/>
                    <img src={this.state.image2} alt="thumbnail-image" onClick ={() => this.imageSelector(this.state.image2)}/>
                    <img src={this.state.image3} alt="thumbnail-imagene" onClick ={() => this.imageSelector(this.state.image3)}/>
                    <img src={this.state.image4} alt="thumbnail-image" onClick ={() => this.imageSelector(this.state.image4)}/>
                    <img src={this.state.image5} alt="thumbnail-image" onClick ={() => this.imageSelector(this.state.image5)}/>
                    {/* {thumbnails} */}
                </div>


                {/*{ similar products views}*/}

                <div className="similar_product">

                </div>
            </div>
        );
    }
}

export default ProductDesc;