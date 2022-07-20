import { connect } from 'react-redux';
import MainApp from './main_app';
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

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);