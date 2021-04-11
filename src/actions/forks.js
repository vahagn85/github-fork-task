import { GET_FORKS, ERROR_FORKS, RESET_FORKS } from './types'

import axios from "axios";

export const getForks= (user,repo) => async dispatch => {
    try {
        const res = await axios.get(`https://api.github.com/repos/${user}/${repo}/forks`);
        dispatch({
            type:GET_FORKS,
            payload:res.data
        })

    }catch (err) {
        dispatch({
            type:ERROR_FORKS,
            payload: {msg:err.response.data.message,status:err.response.status}
        })
    }
};

export const resetForks = () => ({
    type: RESET_FORKS
});