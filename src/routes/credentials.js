import { PUBLIC_CLIENT_ID, PUBLIC_CLIENT_SEC } from "$env/static/public";
const Credentials = () => {
    return {
        clientId: PUBLIC_CLIENT_ID,
        clientSecret: PUBLIC_CLIENT_SEC
    }
}
export { Credentials };