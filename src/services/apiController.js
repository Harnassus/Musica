import { Credentials } from '../services/credentials.js';
import axios from 'axios'

const spotify = Credentials();
	
let accessToken;

 const getToken = () => {
		return axios('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Basic ' + btoa(spotify.clientId + ':' + spotify.clientSecret)
			},
			data: 'grant_type=client_credentials'
		}).then((token) => {
			accessToken = token.data.access_token;
			})
		
 }

async function getPlaylist() {
	let a;

	async function playlistEndpoint() {
		await getToken();
		let data = axios('https://api.spotify.com/v1/browse/featured-playlists', {
			headers: { Authorization: 'Bearer ' + accessToken },
			method: 'GET'
		}).then((res) => {
			a = res.data
		}).catch((err) => { console.log(err) });
		
		const p = a;
		console.log(p);
		return p
		
	}
	return {
		playlist: playlistEndpoint()

	}
	//  return featuredPlaylists
}


export {accessToken, getPlaylist} 
	
