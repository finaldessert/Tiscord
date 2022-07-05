import React from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import clouds from './splashsvg/clouds.svg';
import homeleft from './splashsvg/homeleft.svg';
import homeright from './splashsvg/homeright.svg';


class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

        
    render() {
        let splashbutton;

        if(!this.props.LoggedIn) {
            splashbutton = <Link id="splash-button" to='/login'>Login</Link>
        }

        return(
            <div id='splash'>
                    <div id='splash-head'>
                            <div id='logo'>
                                <img id='logopic' src='' alt="logo" />
                                <Link id="logo-link" to='/'> 
                                    <i className="test"></i>
                                    <h2>Tiscord</h2>
                                </Link>
                            </div>
                        <ul id='nav'>
                            <li><a href="google.com">Safety</a></li>
                            <li><a href="google.com">Support</a></li>
                            <li><a href="google.com">Blog</a></li>
                            <li><a href="google.com">my Portfolio</a></li>
                        </ul>
                        <button id='landingbutton' type='button'>Login</button>
                    </div>
                    <div id='hero-container'>
                        <div id='splash-body-container'>
                                <h1 id='splash-body-header'> Imagine a place...</h1>
                                <body id='splash-body-body'> ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often. </body>
                        </div>
                    </div>
            </div>
        )
    }
}


export default Splash;
