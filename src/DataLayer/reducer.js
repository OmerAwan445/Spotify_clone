export const initialState={
    user:null,
    playlist:[],
    playing:false,
    playlistInfo:null,
    playlistTracks:null,
    token:  JSON.parse(window.localStorage.getItem('token'))
};


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

    case 'SET_PLAYLISTS':
    return{
        ...state,
        playlist:action.playlist,
    }

    case 'SET_PLAYLIST_INFO':
    return{
        ...state,
        playlistInfo:action.playlistInfo,
    }
    case 'SET_PLAYLIST_TRACKS':
    return{
        ...state,
        playlistTracks:action.playlistTracks,
    }

    default: {
        throw Error('Unkown Error ' + action.type);
    }
}
}