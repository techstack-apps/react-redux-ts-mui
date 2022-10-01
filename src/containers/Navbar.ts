import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { AuthState } from '../action-types/auth';
import { logout } from '../actions/auth';
import { ThunkDispatch } from 'redux-thunk'

interface DispatchProps {
  logout: () => void
}

interface OwnProps {
}

const mapStateToProps = (state: AuthState): AuthState => state

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => ({
  logout: () => {
    dispatch(logout())
  }
})

export default connect<AuthState, DispatchProps, {}, AuthState>(mapStateToProps, mapDispatchToProps)(Navbar)