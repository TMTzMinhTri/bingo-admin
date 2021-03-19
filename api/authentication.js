import { Api } from ".";

export async function getCurrentUser() {
    return Api.get('/partners/me')
}