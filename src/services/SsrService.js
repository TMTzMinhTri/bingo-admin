import { getCurrentUser } from "api/authentication";

export async function doWithServerSide(context, callback, redirect = null) {
    try {
        let isAuthenticated = false;
        let user = null
        const currentUser = await getCurrentUser(context)

        if (currentUser?.object) {
            user = currentUser.object
            isAuthenticated = true
        }
        if (!isAuthenticated && redirect) {
            const redirectUrl = redirect.url || '/';
            
            return {
                redirect: {
                    destination: redirectUrl,
                    permanent: false,
                },
            };
        }
        let result = callback(context);
        if (result && result instanceof Promise) {
            result = await result;
        }
        result = result || {};
        result.props = result.props || {};
        result.props.user = user || null;
        result.props.isAuthenticated = isAuthenticated;

        return result
    } catch (error) {
        return {
            props: {
                isAuthenticated: false,
                user: null,
            },
        }
    }
}