import React from "react";
import FriendsList from "../main_app_parts/friends";

class MainApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id='main-app'>
                <FriendsList />
            </div>
        )
    }
}

export default MainApp;