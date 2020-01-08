import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";

import Home from "./container/Home/Home";
import Footer from "./components/Footer/Footer";
import MenuBar from "./components/MenuBar/MenuBar";
import ProductsDisplay from "./container/ProductsDisplay/ProductsDisplay";
import ProductDesc from "./container/ProductDesc/ProductDesc";
import SplashScreen from "./components/Splash_Screen/Splash_Screen";
import './App.css'
import OurStory from "./container/OurStory/OurStory";
import Loading from "./components/Loading/Loading";


class App extends Component {

    constructor(props){
        super(props);
        window.scroll({top:0});
        this.state = {
            
            prevScrollpos: window.pageYOffset,
            loading:false,
        }
    }

    componentWillMount() {
        // sessionStorage.setItem('loading',)
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        // console.log("did mount")
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        console.log(currentScrollPos)
        const visible = prevScrollpos > currentScrollPos;
        console.log(visible);
        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };



    render() {

        // console.log(this.state.prevScrollpos);

        return (
            <div className="App">
                <SplashScreen/>
               <BrowserRouter>
                   <MenuBar/>
                   <Switch>
                       <Route path="/"  exact component={Home}/>
                       {/*<Route path="/"  component={SplashScreen} />*/}

                       <Route path="/our-story" component={OurStory}/>

                       <Route path="/products_list/product-view" component={ProductDesc}/>
                       <Route path="/products_list" component={ProductsDisplay}/>
                   </Switch>
                   <Footer/>
               </BrowserRouter>
            </div>
        );
    }
}

export default App;