import axios from 'axios';
export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAIL = 'FETCHING_DATA_FAIL';



export const getData = () => {
    return (dispatch => {

        dispatch({type:FETCHING_DATA_START});

        axios
            .get('http://api.icndb.com/jokes/random?limitTo=[explicit]&firstName=Matt&lastName=Emrich')
          .then(res => {
              console.log('res: ', res)
                dispatch({type:FETCHING_DATA_SUCCESS, payload:res.data.value.joke.normalize()});
            })
            .catch(err => {
                dispatch({type:FETCHING_DATA_FAIL, payload: err.response.message});
            });
    });
}

