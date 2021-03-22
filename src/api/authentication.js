import { Api } from ".";

export async function getCurrentUser(context) {
    return Api.get({ url: '/partners/me', context })
}
export async function signIn(data) {
    return Api.post({ url: '/partners/sign_in', body: data })
}