import { readCookies } from "lib/cookies";
import { getCookieFromCtx } from "utils/CookieParser";

function getSessionToken(ctx) {
    const tk = getCookieFromCtx(ctx, 'access_token');
    return tk;
}

export const Api = {
    httpRequest({ method, url, body, context }) {
        const headers = {}
        if (context) {
            const AuthorizationValue = getSessionToken(context);
            if (AuthorizationValue) {
                headers.Authorization = `${AuthorizationValue}`;
            }
        } else {
            headers.Authorization = readCookies('access_token');
        }
        const path = `http://localhost:8000/api/v1/${url}`
        return new Promise((resolve) => {
            fetch(path, {
                method,
                body: body ? JSON.stringify(body) : null,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    ...headers
                },
            })
                .then((response) => response.json())
                .then((rsp) => resolve(rsp));
        });
    },
    get(props) {
        return this.httpRequest({ method: 'GET', ...props });
    },
    post(props) {
        return this.httpRequest({ method: 'POST', ...props });
    },
    patch(props) {
        return this.httpRequest({ method: 'PATCH', ...props });
    },
    delete(props) {
        return this.httpRequest({ method: 'DELETE', ...props });
    },
};