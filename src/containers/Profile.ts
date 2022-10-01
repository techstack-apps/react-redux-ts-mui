import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { AuthState } from '../action-types/auth';

interface DispatchProps {

}

const mapStateToProps = (state: AuthState): AuthState => state

const mapDispatchToProps = () => ({})

export default connect<AuthState, DispatchProps, {}, AuthState>(mapStateToProps, mapDispatchToProps)(Profile)