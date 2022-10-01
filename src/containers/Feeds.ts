import { connect } from 'react-redux'
import Feeds from '../components/Feeds'
import { FeedState } from '../action-types/feeds';
import { fetchFeeds } from '../actions/feeds';
import { ThunkDispatch } from 'redux-thunk'

interface DispatchProps {
  fetchFeeds: () => void
}

interface OwnProps {
}

const mapStateToProps = (state: FeedState): FeedState => state

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => ({
  fetchFeeds: async () => {
    await dispatch(fetchFeeds())
  }
})

export default connect<FeedState, DispatchProps, {}, FeedState>(mapStateToProps, mapDispatchToProps)(Feeds)