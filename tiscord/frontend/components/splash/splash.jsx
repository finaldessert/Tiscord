import React from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';

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
            <div>
                <h1>good job</h1>
            </div>
        )
    }
}


export default Splash;
