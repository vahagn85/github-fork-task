import {GET_FORKS,ERROR_FORKS,RESET_FORKS} from '../actions/types';

const initialState ={
    forks:[],
    loading:true,
    error:null
};

export default function (state=initialState,action) {
    const {type,payload} = action;
    switch (type) {
        case GET_FORKS:
            return{
                ...state,
                loading:false,
                forks:payload,
                error:null
            };
        case RESET_FORKS:
            return {
                forks:[],
                loading:true,
                error:null
            }
        case ERROR_FORKS:
            return {
                ...state,
                error:payload,
                forks:[],
                loading:false
            };
        default:
            return state
    }
}
