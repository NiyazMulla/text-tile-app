import React, {Component} from 'react';
import './OurStory.css'
import OurStory1 from "../../assets/image/our-story-1.jpg"
import OurStory2 from "../../assets/image/2.jpg";
import OurStory3 from "../../assets/image/3.jpg";
import FooterLogo from "../../assets/image/footer_logo.png"

class OurStory extends Component {

    constructor(props){
        super(props);
        window.scroll({top:0});
    }
    

    render() {
        return (
            <div className="our-story-main-content">
                <div className="our-story-first-content">
                    <img src={OurStory1} alt="none" />
                   <div className="our-story-first-content-text">
                        <div className="our-story-first-content-heading">
                        <h1>OUR STORY</h1>
                    </div>
                    <div className="our-story-first-content-logo">
                      <img src={FooterLogo} alt="company Log"/>
                    </div>
                    <div className="our-story-first-content-content">
                        <p>A modern community or a person of a subculture characterized by a smart stylish appearance.</p>
                        <p>The idea : make it easy for men to buy ready to wear modern dress shirts.</p>
                        <p>Founded in 2018 , starting from the idea of a young fashion designer with a very experienced
                            textile designer ,e-com business developer , accountant and a pattern master .
                            In September 2019 we launched the first season AW19 collection of MODVOLK with purpose
                            of creating a movement.A movement of like- minded individuals who share a belief that clothing
                            should be used as a form of expression. Concept that brings together the synergetic modern cultural
                            world of fashion, design, art, music and architecture. Born under the pretense that clothing should
                            be effortless and chic.Who wears Modvolk is confident and the clothing simply enhances one's
                            own thought.</p>
                    </div>
                   </div>
                </div>
                <div className="our-story-second-content">
                    <div className="our-story-second-content-content">
                        <p>
                            We do all of our design and customer service from our office in Bangalore, India.
                            Considering fabrics, fit, service, speed and just overall value, we're way ahead.
                            But that's not enough. We want to be the best that it's possible to be.
                            So, we're always searching for better materials. Analyzing our customer service.
                            Expanding our fit options.
                        </p>
                        <p>
                            Technology is what enables us to streamline operations, reduce errors and deliver a better value.
                            Technology helps power new and delightful customer experiences.We look at the future of retail
                            and see massive opportunities.We aspire to build a leading menswear brand. This is about more than
                            technical metrics. Style matters. Taste matters. The people that help you with your purchase matter.
                            It's the feeling you get when you touch our products or come to our showroom or browse our site.
                            Our brand is driven by who we are. As designers, entrepreneurs, and as friends living and working in Indian cities.
                            We stand behind our products. We take pride in what we do. We hope you will too.
                        </p>
                    </div>
                </div>
                <div className="our-story-third-content">
                    <div className="our-story-third-content-image">
                         <img src={OurStory3} alt="none" />
                         <div className="our-story-third-conenet-text">
                             <h3>Quality Construction</h3>
                           <p>
                           Our construction methods combine sophisticated technology
                            with traditional shirt making methods. We use computer generated
                            patterns and robotic fabric cutters that are fast and reliable,
                            with assembly by experienced tailors who carefully hand-sew shirts
                            with care to help achieve a perfect fit every time – guaranteed.
                           </p>
                            <p>
                            Our collars come in a range of constructions, from crisp, fused
                            business collars to soft, casual, unfused collars.
                            </p>
                    </div>
                    </div>
                </div>
                <div className="our-story-fourth-content"> 
                <img src={OurStory2} alt="none"/>
                    <div className = "our-story-fourth-content-image">    
                        <div className="our-story-fourth-content-text">
                            <span>Fit.</span>
                        <p>
                        If you’re particular about how a shirt fits,
                        you’re in good company.Our size options
                        are incredibly comprehensive for any body type.
                        </p>
                    </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default OurStory;