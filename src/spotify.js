

export const authEndpoint="https://accounts.spotify.com/authorize";

const clientId="72e3c2b855f2439090eefd5f91424534";

const redirectUri = 'http://localhost:3000/';

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export function getAccessTokenFromResponse () {
   return  window.location.hash
   .substring(1)
   .split('&')
   .reduce((initial,item) => {
    const parts=item.split('=');
   initial[parts[0]] =decodeURIComponent(parts[1])
    return initial;
   },{})
  }


export const accessUrl =`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20"
)}&response_type=token&show_dialog=true`