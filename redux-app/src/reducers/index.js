import { FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL, FETCHING_DATA_START} from './../actions';

const initialState = {
  data: '',
  isFetching: false,
  error: ''
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCHING_DATA_START):
      return({
        ...state,
        isFetching: true,
        error: ''
      });
    case(FETCHING_DATA_SUCCESS):
      return({
        ...state,
        data: action.payload,
        isFetching: false
      });
    case(FETCHING_DATA_FAIL):
      return({
        ...state,
        error: action.payload
      })
    default:
      return state;
  }
};

export default reducer