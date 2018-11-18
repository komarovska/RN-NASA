import moment from 'moment';
import { FETCH_DATA } from '../constants';

const initialState = {
  date: moment().format('YYYY-MM-DD'),
  title: '',
  img: '',
  explanation: '',
  isReceived: false,
  isRejected: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_DATA}_FULFILLED`:
      const { date, title, url, explanation } = action.payload.data;
        return {
          date: moment(date, 'YYYY-MM-DD'),
          title: title,
          url: url,
          explanation: explanation,
          isReceived: true,
        };
    case `${FETCH_DATA}_PENDING`:
      return { ...state, isReceived: false };
    case `${FETCH_DATA}_REJECTED`:
      const errorMessage = `Attention! ${action.payload}`;
      return { ...state, isRejected: errorMessage, isReceived: true };
    default:
      return state;
  }
};

export default mainReducer;