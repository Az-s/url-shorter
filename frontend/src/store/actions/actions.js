import axiosApi from '../../axiosApi';

export const SEND_URL_REQUEST = 'SEND_URL_REQUEST';
export const SEND_URL_SUCCESS = 'SEND_URL_SUCCESS';
export const SEND_URL_FAILURE = 'SEND_URL_FAILURE';

export const FETCH_URL_REQUEST = 'FETCH_URL_REQUEST';
export const FETCH_URL_SUCCESS = 'FETCH_URL_SUCCESS';
export const FETCH_URL_FAILURE = 'FETCH_URL_FAILURE';

export const sendUrlRequest = () => ({ type: SEND_URL_REQUEST });
export const sendUrlSuccess = () => ({ type: SEND_URL_SUCCESS });
export const sendUrlFailure = () => ({ type: SEND_URL_FAILURE });

export const fetchUrlRequest = () => ({ type: FETCH_URL_REQUEST });
export const fetchUrlSuccess = url => ({ type: FETCH_URL_SUCCESS, payload: url });
export const fetchUrlFailure = () => ({ type: FETCH_URL_FAILURE });

export const sendUrl = linkData => {
    return async dispatch => {
        try {
            dispatch(sendUrlRequest());
            await axiosApi.post('/links', linkData);
            dispatch(sendUrlSuccess());
        } catch (e) {
            dispatch(sendUrlFailure());
            throw e;
        }
    };
};

export const fetchUrl = () => {
    return async dispatch => {
        try {
            dispatch(fetchUrlRequest());
            const response = await axiosApi.get('/shortUrl');
            dispatch(fetchUrlSuccess(response.data));
        } catch (e) {
            dispatch(fetchUrlFailure());
        }
    };
};