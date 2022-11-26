import {load as Load} from '../../+page.server'
export const load = async ({ fetch, params }) => {
    const endPoint = `https://api.spotify.com/v1/playlists/${params.id}`;

    const tokenLoad = await Load();

    const token = await tokenLoad.token
    
    const getPlaylist = async () => {
        const playlistResult = await fetch(endPoint, {
            headers: {
                Authorization: 'Bearer ' + token
            },
            method: 'GET'
        });
        const res = await playlistResult.json();
        return res;
    }
    return {
        playlist: getPlaylist(),
    }
}