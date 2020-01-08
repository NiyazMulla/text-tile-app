import React, {Component} from 'react';
import "./Footer.css"
import icon from "../../assets/image/footer-icon.jpg"
import { Link} from "react-router-dom";

class Footer extends Component {

    state = {
        news_letter : '',
        footer : [
            {
                footer_heading : "Shop",
                footer_content: [
                    {
                        "data":"Shop"
                    },
                    {
                        "data":"Shirt"
                    },
                    {
                        "data":"LoungeWear"
                    },
                    {
                        "data":"Collections"
                    }

                ]
            },
            {
                footer_heading : "Info",
                footer_content: [
                    {
                        "data":"About",
                        "link":"/our-story"
                    },
                    {
                        "data":"Our Shops",
                        "link":"/our-story"
                    },
                    {
                        "data":"Journal"
                    },
                    {
                        "data":"Our Careers"
                    }

                ]
            },
            {
                footer_heading : "Customer",
                footer_content: [
                    {
                        "data":"My Account"
                    },
                    {
                        "data":"Delivery & Returns"
                    },
                    {
                        "data":"Terms & Condition"
                    },
                    {
                        "data":"Privacy Policy"
                    }

                ]
            },
            {
                footer_heading : "Follow Us",
                footer_content: [
                    {
                        "data":"Facebook"
                    },
                    {
                        "data":"Instagram"
                    },
                    {
                        "data":"Twitter"
                    },
                ]
            },
        ],
    };

    handlerChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    };

    render() {

        let footer_list = "";
        if(this.state.footer.length > 0){
            footer_list = this.state.footer.map((data,i)=> {
                return(
                    <div className="footer_content_row_2_1">
                        <div className="footer_content_row_2_1_heading">
                            <h5>{data.footer_heading}</h5>
                        </div>
                        {data.footer_content.map(data => {
                            return(
                                <div className="footer_content_row_2_1_link">
                                    <Link to={data.link}>{data.data}</Link>
                                </div>
                            )
                        })}
                    </div>
                )
            })
        }

        return (
            <div className="footer_container">
               <div className="footer_logo">
                   <img src={icon} alt="none"/>
               </div>
                <div className="footer_content">
                    <form>
                        <div className="footer_content_row_1">
                            <div className="footer_content_row_1_1">
                                <div className="footer_content_row_1_1_heading">
                                    NEWSLETTER
                                </div>
                                <div className="footer_content_row_1_1_text">
                                    <input type="email"
                                           name="news_letter"
                                           value={this.state.news_letter}
                                           onChange={this.handlerChange}
                                           placeholder="Enter your mail id"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="footer_content_row_2">
                        {footer_list}
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;