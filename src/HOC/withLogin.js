export const withLogin = (Component, redirect = {}) => ({ ...props }) => {
    const { isAuthenticated } = props;

    if (!isAuthenticated) {
        if (typeof window !== 'undefined') {
            window.location.href = '/login'
            return <div>Loading .....</div>;
        }
    }

    return <Component {...props} />;
};

export default withLogin;
