export const initialState={
    user:null,
    playlist:[],
    is_playing:false,
    playlistInfo:null,
    playlistTracks:null,
    currentTrack:null,
    token:'BQAVPnDD3Ve-3Yu2iJn9Ba8BqhdipISG9Q_RUMzfFNzmLXne4x05S7_Za7idJ8TD-TjsMzi7oqPtEeZ6Rosmb7jg5rFT34E3PDYkBj1pB_PjoKVrpg3wAtlDUt4UQaAxkvXDw29fG-hzRflbKylQmrdWREA3iuaJl5qU84lCu58jo3EgNNyllVxJell3c9RYpVNOWDVxGYZ0UAmyNnSnVA'
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