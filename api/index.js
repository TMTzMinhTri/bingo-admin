export const Api = {
    httpRequest(method, url, body) {
        const path = `http://localhost:8000/api/v1/${url}`
        return new Promise((resolve) => {
            fetch(path, {
                method,
                body: body ? JSON.stringify(body) : null,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": "Nb4k4GqQWR2Cacp3VTdQ"
                },
            })
                .then((response) => response.json())
                .then((rsp) => resolve(rsp));
        });
    },
    get(url) {
        return this.httpRequest('GET', url);
    },
    post(url, body) {
        return this.httpRequest('POST', url, body);
    },
    patch(url, body) {
        return this.httpRequest('PATCH', url, body);
    },
    delete(url) {
        return this.httpRequest('DELETE', url);
    },
};