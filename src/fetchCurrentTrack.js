
export default async function fetchCurrentTrack(url, token) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Add 1-second delay

  const result = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (result.status !== 200) return;
  const { item, is_playing } = await result.json();
  const currentTrackData = {
    image: item.album.images[2]?.url,
    name: item.name,
    artists: item.album.artists.map((artist) => artist.name),
    id: item.id,
  };

  return { currentTrackData, is_playing };
}
