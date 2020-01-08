import React, {Component} from 'react';
import './Loading.css'


class Loading extends Component {
    render() {
        return (
            <div className="loading_container">
                <div className="loading-dots">
                    <div className="bounce"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        );
    }
}

export default Loading;