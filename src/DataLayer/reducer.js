export const initialState={
    user:null,
    playlist:[],
    playing:false,
    playlistInfo:null,
    playlistTracks:null,
    token: 'BQB7t-ik_oY0I3RCJGWzuz71hCPbhu7nJpgZ8bA8gVCro8i08BHN3YDRPinemGK6adDBG90uySc0I_zr-73c67ezOUV-Ss7IOV8FuNr3oq8WtMAd8F7_Jcl_4iuruYbKWPdV9YaRDUKijW0u1nkjTiBYrcxfdxZDkphweUCWQ1-wcZJEM062pgUCUixqgaGcSZSKDkn_Mwsvl7826I-lAg'
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