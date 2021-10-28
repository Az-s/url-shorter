import {
    FETCH_URL_REQUEST,
    FETCH_URL_SUCCESS,
    FETCH_URL_FAILURE,
} from '../actions/actions';

const initialState = {
    fetchLoading: false,
    link: [],
  };
  
  const urlReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_URL_REQUEST:
        return { ...state, fetchLoading: true };
      case FETCH_URL_SUCCESS:
        return { ...state, fetchLoading: false, link: action.payload };
      case FETCH_URL_FAILURE:
        return { ...state, fetchLoading: false };
      default:
        return state;
    }
  };
  
  export default urlReducer;