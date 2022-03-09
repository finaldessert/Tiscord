import { connect } from 'react-redux';
import { signup } from '../../actions/sessions_actions';
import CreateUser from './create_user_form';

const mapStatetoProps = (state) => ({
    user: {
        username: '',
        email: '',
        password: ''
    }
});

const mapDispatchtoProps = (dispatch) => ({
    action: (user) => dispatch(signup(user))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(CreateUser);

