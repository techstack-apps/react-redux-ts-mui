import { connect } from 'react-redux'
import Login from '../components/Login'
import { AuthState } from '../action-types/auth';
import { login,resetLogin } from '../actions/auth';
import { ThunkDispatch } from 'redux-thunk'

interface DispatchProps {
  login: (username: string, password: string) => void
  resetLogin: () => void
}

interface OwnProps {
}

const mapStateToProps = (state: AuthState): AuthState => state

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => ({
  login: async (username: string, password: string) => {
    return dispatch(login(username, password))
  },
  resetLogin: () => {
    dispatch(resetLogin())
  }
})

export default connect<AuthState, DispatchProps, {}, AuthState>(mapStateToProps, mapDispatchToProps)(Login)