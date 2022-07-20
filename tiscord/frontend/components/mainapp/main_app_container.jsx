import { connect } from 'react-redux';
import MainApp from './main_app';
import { getfriends } from '../../actions/friends_actions'

const mapStateToProps = state => {
  return {
    user_id: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getfriends: () => dispatch(getfriends())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);