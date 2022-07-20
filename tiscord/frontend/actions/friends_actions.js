import * as FriendUtil from '../util/friend_api_util'
import { receiveSessionErrors } from './sessions_actions';

export const RECIEVE_FRIENDS = 'RECIEVE_FRIENDS'

export const receiveFriends = friends => ({
    type: RECIEVE_FRIENDS,
    friends
});

export const getfriends = friends => dispatch => (
    FriendUtil.getfriends(friends)
        .then(friends => dispatch(receiveFriends(friends))),
            err => dispatch(receiveSessionErrors(err.response))
);