export const initialState={
    user:null,
    playlist:[],
    playing:false,
    playlistInfo:null,
    playlistTracks:null,
    token:'BQC31Mi66Cs1a2qv5NPojEsZlime0ncwb56H9zw6FMWIInnaCq3TbyDF6sL_tMOr0j_Yz-FcpPqjWGjN7d4l_RMnLj1bDJcDryxd5XlpL6TDfVhOxWNXQ-B3qBYvikF9E4BYXo_onlqWAy6Xb5bxovxagMqXhLgTGQ7IIGCCBaWFiLe4DfLzc7M5kd-3D9E9YRC2BLIFv0KCJ4rLk_6qYg'
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