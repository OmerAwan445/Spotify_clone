export const initialState={
    user:null,
    playlist:[],
    is_playing:false,
    playlistInfo:null,
    playlistTracks:null,
    currentTrack:null,
    // token:'BQAH-Ds6PgCqRWNteiFi-k05dDk7HwaK-o4rsd_E498nzzX10r6qJdcvz2gnH5A6ehYO1VAlMDY3j4kaeIeIePiJYaMqV-AqqU5cRzpAqX6xYJxFtEPM_DIltXHxbNfvMKjE5ZpDq1B-MDPuFEtkN5OGyxr-KOHXvDWnpDgAPEpC42CxbSjhUVu0B0jVyl78k5Tqtp4WbklMmqAFgjs6'
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