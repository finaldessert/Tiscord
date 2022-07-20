import React from "react";

class MainApp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFriends();
    }

    render() {

        return (
            <div id='main-app'>
                <div id='friends-list'>

                </div>
            </div>
        )
    }
}

export default MainApp;