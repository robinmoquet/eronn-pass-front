export interface RouteInterface {
    path: string
}

export const routes: { [key: string]: RouteInterface } = {
    home: {
        path: '/',
    },
    login: {
        path: '/login',
    },
    signup: {
        path: '/signup',
    },
    technicalSupport: {
        path: '/tech-support',
    },
};