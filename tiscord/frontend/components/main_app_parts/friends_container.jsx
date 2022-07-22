import { connect } from 'react-redux';
import FriendsList from './friends';
import { getfriends, addfriend } from '../../actions/friends_actions'

const mapStateToProps = state => {
  return {
    user_id: state.session.id,
    friendslist: state.friendslist
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getfriends: () => dispatch(getfriends()),
    addfriend: () => dispatch(addfriend(friend_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);