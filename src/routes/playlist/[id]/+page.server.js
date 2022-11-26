import {load as Load} from '../../+page.server'
export const load = async ({ fetch, params }) => {
    const endPoint = `https://api.spotify.com/v1/playlists/${params.id}`;
    const token = await Load();

    const getPlaylist = async () => {
        const playlistResult = await fetch(endPoint, {
            headers: {
                Authorization: 'Bearer ' + token.token
            },
            method: 'GET'
        });
        const res = await playlistResult.json();
        return res;
    }
    return {
        playlist: getPlaylist(),
       token: token
    }
}