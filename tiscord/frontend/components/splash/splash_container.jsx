import { connect } from 'react-redux';
import Splash from './splash';
import { logout } from '../../actions/sessions_actions';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);