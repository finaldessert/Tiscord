import React from "react";

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFriends(this.props.user_id);
    }

    render() {

        return (
            <div id='friends-list-container'>
                    {this.props.friendslist.map(friend => {
                        return (
                            <div id='friend-column'>
                                <il>{friend.username}</il>
                                <il>{friend.email}</il>
                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default FriendsList;