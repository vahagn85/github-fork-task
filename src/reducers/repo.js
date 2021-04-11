import {GET_REPO_NAME,ERROR_REPO,GET_ALL_REPO,RESET_REPO} from '../actions/types';

const initialState ={
    repoName:'',
    loading:true,
    error:null,
    allRepo:[]
};

export default function (state=initialState,action) {
    const {type,payload} = action;
    switch (type) {
        case GET_REPO_NAME:
            return{
                ...state,
                loading:false,
                repoName:payload.length!==0?payload[0].name:'',
                error:null
            };
        case GET_ALL_REPO:
            return {
                ...state,
                loading:false,
                allRepo:payload,
                error:null
            }
        case RESET_REPO:
            return {
                repoName:'',
                loading:true,
                error:null,
                allRepo:[]
            }
        case ERROR_REPO:
            return {
                ...state,
                error:payload,
                repoName:'',
                loading:false,
                allRepo:[]
            };
        default:
            return state
    }
}
