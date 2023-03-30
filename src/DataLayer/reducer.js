export const initialState={
user:{},
playlist:[],
playing:false,
item:null,
token:'BQDiRl-Gft89KNuHG_R1il690heKQzn3TCjydZVvMLzF36DCCdkqaLt5SiCLiAOVmQ0MjIDwvJaMN5DH78xFhZn4QIhEEZG0hTskIt-j3uKQ69GrsXZsMEOxiImaWX_hnrOicFdgMisLPkmBFTmikynQzpCw7BzehKcdBQDXtmCU4mcdP7MXyhJLOi-Bk9o6HsS75g027A65xX-NAcpz5A',

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
    default: {
        throw Error('Unkown Error ' + action.type);
    }
}
}