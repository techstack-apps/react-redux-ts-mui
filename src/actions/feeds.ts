import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import {
  FeedActionsTypes,
  FETCH_FEEDS,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_ERROR,
} from '../action-types/feeds';
const url = "https://63341af7433198e79dcfe908.mockapi.io/api/v1/news" //will be moved to .env

export const fetchFeeds = () => async (
  dispatch: Dispatch<FeedActionsTypes>
) => {
  dispatch({
    type: FETCH_FEEDS
  });

  return axios.get<any, AxiosResponse, any>(url)
    .then(resp => {
      dispatch({
        type: FETCH_FEEDS_SUCCESS,
        payload: resp.data,
      });
    }).catch(error => {
      dispatch({
        type: FETCH_FEEDS_ERROR,
        payload: {
          error: 404,
          message: "Request Error"
        },
      });
    })
};
