export interface Feed {
  id: number;
  date: string;
  title: string;
  description: string;
}

export interface IError {
  error: number;
  message: string;
}

export interface FeedState {
  data: Feed[] | null;
  error: IError | null;
  loading: boolean;
}

export const FETCH_FEEDS = 'FETCH_FEEDS';
export const FETCH_FEEDS_SUCCESS = 'FETCH_FEEDS_SUCCESS';
export const FETCH_FEEDS_ERROR = 'FETCH_FEEDS_ERROR';

export interface FetchFeeds {
  type: typeof FETCH_FEEDS;
}

interface FetchFeedsSuccess {
  type: typeof FETCH_FEEDS_SUCCESS;
  payload: Feed[];
}

interface FetchFeedsError {
  type: typeof FETCH_FEEDS_ERROR;
  payload: IError;
}

export type FeedActionsTypes =
  | FetchFeeds
  | FetchFeedsSuccess
  | FetchFeedsError;