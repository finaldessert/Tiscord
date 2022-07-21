import React from "react";
import UserLink from "./user_link";

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
                           <UserLink />
                        )
                    })}
            </div>
        )
    }
}

export default FriendsList;