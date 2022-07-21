import React from "react";

class UserLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id='user-link'>
                <il>{friend.username}</il>
                <il>{friend.email}</il>
            </div>
        )
    }
}

export default UserLink;