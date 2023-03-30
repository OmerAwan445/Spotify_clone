

export const authEndpoint="https://accounts.spotify.com/authorize";

const clientId="99c2ed831dca4b2f8515d4f5e4fe2cf8";

const redirectUri = 'http://localhost:3000/';

// http://localhost:3000/#access_token=BQByms9KKq6gBDnIuFJ_9h-9Ys-G0NLYFLkVETc9KdiRcWn6sXEGQhdcodvb1Z2zdoAK5Z-4
// CxQVJsMPK5GO9mQDDpqTeO3OQ44MfdQO5isBlpuePH55H-55e1aN8UG6zmkTZPdUoscVeZOdP4_JnsDFvW7wRq8kwjRY96vnc-
// 83RrxvjIMeeymvyNHneOn-GpQO-iGfNpdVWwuP1CDoIBw&token_type=Bearer&expires_in=3600

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