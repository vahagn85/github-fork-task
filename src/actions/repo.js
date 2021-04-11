import {GET_REPO_NAME, ERROR_REPO,GET_ALL_REPO,RESET_REPO} from './types'

import axios from "axios";

export const getUserRepos= (user) => async dispatch => {
    try {
        const res = await axios.get(`https://api.github.com/users/${user}/repos`);
        dispatch({
            type:GET_REPO_NAME,
            payload:res.data
        })

    }catch (err) {
        dispatch({
            type:ERROR_REPO,
            payload: {msg:err.response.data.message,status:err.response.status}
        })
    }
};

export const getRepos= (repoName,page=1) => async dispatch => {
    try {
        const res = await axios.get(`https://api.github.com/search/repositories`,{
            params:{
                page,
                q:repoName
            }
        });
        dispatch({
            type:GET_ALL_REPO,
            payload:res.data
        })

    }catch (err) {
        dispatch({
            type:ERROR_REPO,
            payload: {msg:err.response.data.message,status:err.response.status}
        })
    }
};

export const resetRepo = () => ({
    type: RESET_REPO
});