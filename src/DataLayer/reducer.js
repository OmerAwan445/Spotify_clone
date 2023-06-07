export const initialState={
    user:null,
    playlist:[],
    is_playing:false,
    playlistInfo:null,
    playlistTracks:null,
    currentTrack:null,
    token:'BQBfaXUlX8aC_Ln-DEl4Lapw0m6I8HcbIT8_jZdqsB-3cOjXKzpU_LdrQXOz20O6VGepBaZ7ZYp5xrvub-n1UpcrlUs---AQoYZykix_c3dM1Rvd0uEclSCMlUgAivgPazpIYPnpGM9jjNMX1LosIIAPZVio8RcgaaTnaWV7HJj-CqbgsDSznaZZDH-gPbflAnotbnLyLc7UMD_bdxtH'
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
    case 'SET_CURRENTLY_PLAYING_TRACK':
    return{
        ...state,
        currentTrack:action.currentTrack,
    }
    case 'SET_ISPLAYING':
    return{
        ...state,
        is_playing:action.is_playing,
    }

    default: {
        throw Error('Unkown Error ' + action.type);
    }
}
}