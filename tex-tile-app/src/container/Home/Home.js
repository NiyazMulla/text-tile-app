import React, {Component} from 'react';
import FirstBanner from "../../components/FirstBanner/FirstBanner";
import SecondBanner from "../../components/SecondBanner/SecondBanner";
import ThirdBanner from "../../components/ThirdBanner/ThirdBanner";
import FourthBanner from "../../components/FourthBanner/FourthBanner";


class Home extends Component {

    

    render() {
        return (
            <div>
                {/*<Header/>*/}
                {/*<CarouselModal/>*/}
                <FirstBanner/>
                <SecondBanner/>
                <ThirdBanner/>
                <FourthBanner/>
            </div>
        );
    }
}

export default Home;