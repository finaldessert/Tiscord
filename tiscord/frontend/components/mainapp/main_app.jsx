import React from "react";

class MainApp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFriends(this.props.user_id);
    }

    render() {

        return (
            <div id='main-app'>
            </div>
        )
    }
}

export default MainApp;