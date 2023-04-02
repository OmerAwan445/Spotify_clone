export const initialState={
    user:null,
    playlist:[],
    playing:false,
    item:null,
    discover_weekly:null,
    token:'BQDhKi-HA9-GYtJLAv2EO0983Yelyq6gYbG1TYdRW3mTSdxwgxNshPXiLqUEERcz4dEcogt2RWmrV-TkPzaGvDEV65-TaYOEXFD2PyaI9OhLqm8z_yJRoPcuvwa42HZXehg_xZgdXJD6OPrapVmrrYk74YwRLGd-fkBjmSvga7TVR91w1lhhvmZCZqb-uVTfOtob9RChMoBD-geedoEmZg'
};

// user?.images?[0].url
// user.display_name
export function dataReducer(state,action){

    switch(action.type){
    case 'SET_USER':
    return{
        ...state,
        user:action.user,
    }
    case 'SET_TOKEN':
    return{
        ...state,
        token:action.token,
    }

    case 'SET_PLAYLIST':
    return{
        ...state,
        playlist:action.playlist,
    }

    case 'SET_DISCOVER_WEEKLY':
    return{
        ...state,
        discover_weekly:action.discover_weekly,
    }
    default: {
        throw Error('Unkown Error ' + action.type);
    }
}
}