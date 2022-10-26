import {SECRET_CLIENT_ID, SECRET_CLIENT_SEC} from '$env/static/private'
/** @type {import('./$types').PageServerLoad} */
export const prerender = true;
export const load = async () => {

    // Endpoints
    const tokenEndpoint = 'https://accounts.spotify.com/api/token?grant_type=client_credentials';
    const playlistEndpoint = 'https://api.spotify.com/v1/browse/featured-playlists';
    const newReleasesEndpoint = 'https://api.spotify.com/v1/playlists/37i9dQZF1DXbpmT3HUTsZm';
    const popularTracksEndpoint = 'https://api.spotify.com/v1/playlists/75GeX247deNdTX7zdyZDnU';

    // Requests
    const getToken = async () => {
        const tokenRequest = await fetch(tokenEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + btoa(SECRET_CLIENT_ID + ':' + SECRET_CLIENT_SEC)
            },
        });
        const res = await tokenRequest.json();
        return res.access_token;
    };
    
    const getPlaylists = async () => {
        const playlistsRequest = await fetch(playlistEndpoint, {
            headers: {
                Authorization: 'Bearer ' + await getToken()
            },
            method: 'GET'
        });
        const res = await playlistsRequest.json();
        return res.playlists.items;
    };

    const getNewReleases = async () => {
        const newReleasesRequest = await fetch(newReleasesEndpoint, {
            headers: {
                Authorization: 'Bearer ' + await getToken()
            },
            method: 'GET'
        });
        const res = await newReleasesRequest.json();
        return res.tracks.items;
    };

    const getPopularTracks = async () => {
        const popularTracksRequests = await fetch(popularTracksEndpoint, {
            headers: { Authorization: 'Bearer ' + await getToken() },
            method: 'GET'
        });
        const res = await popularTracksRequests.json();
        return res.tracks.items;
    }
    
    
    return {
        token: getToken(),
        playlists: getPlaylists(),
        newReleases: getNewReleases(),
        popularTracks: getPopularTracks(),
    }
}
