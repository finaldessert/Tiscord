import React from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import clouds from './splashsvg/clouds.svg';
import homeleft from './splashsvg/homeleft.svg';
import homeright from './splashsvg/homeright.svg';
import world from '../../../public/world2.png'


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
                                {/* <img id='logopic' src='' alt="logo" /> */}
                                <Link id="logo-link" to='/'> 
                                    <i className="test"></i>
                                    <h2>Tiscord</h2>
                                </Link>
                            </div>
                        <ul id='nav'>
                            <li><a href="google.com">About the Dev</a></li>
                            <li><a href="google.com">Safety</a></li>
                            <li><a href="google.com">Support</a></li>
                            <li><a href="google.com">Blog</a></li>
                            <li><a href="google.com">my Portfolio</a></li>
                        </ul>
                        <Link to='/login'>
                            <button id='landingbutton' type='button'>Login</button>
                        </Link>
                    </div>
                    <div id='hero-container' >
                        <h1 id='splash-body-header' className='bg' > Imagine a place...</h1>
                        <div id='splash-body-body' className='bg'> ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often. </div>
                        <button id='contact-button'>Contact Me</button>
                        <button id='open-in-browser-button'>Open Tiscord</button>
                    </div>
                    <div id='footer'>
                        <div id='bye'>A Clone War Designed and built by Benny Lim</div>
                    </div>
            </div>
        )
    }
}


export default Splash;

// style={{ backgroundImage:`url(${world})`, backgroundSize:'fill', height: '100vh'}}