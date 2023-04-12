
export default async function fetchCurrentTrack(url,token){
    const result =  await fetch(url, {
    method: "GET",
     headers: { Authorization: `Bearer ${token}` },
     });
        if(result.status !==200) return;
       const currentTrack = await result.json();
       const {item,is_playing} = currentTrack;
        const currentTrackData = {
       image : item.album.images[2]?.url,
         name: item.name,
           artists:item.album.artists.map(artist=>artist.name)
     }
       return {currentTrackData,is_playing};
    }