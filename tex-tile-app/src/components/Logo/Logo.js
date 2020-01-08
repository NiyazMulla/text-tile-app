import React, {Component} from 'react';
import LogoImage from "../../assets/image/Logo.png"
class Logo extends Component {
    render() {
        return (
            <div>
                <img src={LogoImage} alt="none"/>
            </div>
        );
    }
}

export default Logo;