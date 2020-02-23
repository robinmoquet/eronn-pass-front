const routes: { [key: string]: any } = {
    home: {
        path: '/home'
    },
    login: {
        path: '/login'
    }
};

export const path = (routeName: string) => {
    return routes[routeName].path;
}