import {SECRET_CLIENT_ID, SECRET_CLIENT_SEC} from '$env/static/private'
/** @type {import('./$types').PageServerLoad} */
export const prerender = true;
export const load = async () => {
    const tokenUrl = 'https://accounts.spotify.com/api/token?grant_type=client_credentials';
    const playlistEndpoint = ''

    const tokenRequest = await fetch(tokenUrl, {
        method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Basic ' + btoa(SECRET_CLIENT_ID + ':' + SECRET_CLIENT_SEC)
			},
			
    })
    const access = await tokenRequest.json();
    const accessToken = access.access_token;

    const getPlaylists = await fetch()
    return {
        token: access,
    
    }
}
