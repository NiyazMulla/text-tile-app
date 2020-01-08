import React, {Component} from 'react';
import './Splash_Screen.css'
import history from "../../history";
class SplashScreen extends Component {


    componentWillUnmount() {
    }

    render() {
        return (
            <div className="splash_screen_container">
                <div className="splash_screen_loader_box">
                    
                </div>
            </div>
        );
    }
}

export default SplashScreen;