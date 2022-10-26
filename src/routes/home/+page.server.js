import { load as Load } from "../+page.server";

export const load = async () => {
   const res =  await Load()
    return {
        token: res.token.access_token
    }
}
