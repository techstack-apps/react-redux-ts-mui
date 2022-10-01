import {
  FeedState,
  FeedActionsTypes,
  FETCH_FEEDS,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_ERROR,
} from '../action-types/feeds';

const initialState: FeedState = {
  data: null,
  error: null,
  loading: false
};

export default function feedReducer(
  state = initialState,
  action: FeedActionsTypes
): FeedState {
  switch (action.type) {
    case FETCH_FEEDS:
      return {
        data: [],
        error: null,
        loading: true
      };
    case FETCH_FEEDS_SUCCESS: {
      return {
        data: action.payload,
        error: null,
        loading: false
      };
    }
    case FETCH_FEEDS_ERROR: {
      return {
        data: [],
        error: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
}