/** @format */

import { REGEX_PARAM_ROUTER } from '../config/regex';
import { routes as appRoutes, RouteInterface } from './routes';

/**
 * Permet de récupérer l'url d'une route.
 * Ex:
 *      path('user', null, false) => /user/:id
 *      path('user', {id: '24', device: 'desktop'}) => /user/24?device=desktop
 *
 * @param routeName Le nom de la route
 * @param options Les parameters d'url, si present dans le path, ils seront ajouter dans la QueryString
 * @param paramMustBeReplace Définit si les params, doivent etre incluent dans le path/QueryString
 * @param routes Un objet de route, si null, on ce base sur l'objet de route de l'appli
 *               utiliser pour les tests
 * @return {string} L'url correspondant à la routeName
 */
export const path = (
    routeName: string,
    options: { [key: string]: string } | null = null,
    paramMustBeReplace: boolean = true,
    routes?: { [key: string]: RouteInterface }
): string => {
    routes = routes || appRoutes;
    let route = routes[routeName]?.path;
    if (route === undefined)
        throw new Error(`No route found for: ${routeName}`);

    if (routeHaveParams(route)) {
        const params = getListParams(route);

        if (params === null) {
            throw new Error("Functions routeHavParams doesn't work !");
        }

        if (paramMustBeReplace && (options === undefined || options === null)) {
            throw new Error(`Missing parameters: ${params?.join(', ')}`);
        }

        route = replaceParams(
            route,
            params,
            options as { [key: string]: string },
            paramMustBeReplace
        );

        if (
            paramMustBeReplace &&
            hasRestOptions(options as { [key: string]: string }, params)
        ) {
            route = addRestOptionsToQueryString(
                route,
                options as { [key: string]: string },
                params
            );
        }
    }

    return encodeURI(route);
};

const routeHaveParams = (route: string): boolean =>
    REGEX_PARAM_ROUTER.test(route);

const hasRestOptions = (
    options: { [key: string]: string },
    params: Array<string>
): boolean =>
    Object.keys(options).filter((option: string) => !params.includes(option))
        .length > 0;

const getListParams = (route: string): Array<string> | null => {
    const found = route.match(REGEX_PARAM_ROUTER);
    const res: Array<string> = [];
    found?.every((param: string) => res.push(param.replace(/[{}]/g, '')));
    return res;
};

const replaceParams = (
    route: string,
    params: Array<string>,
    options: { [key: string]: string },
    paramMustBeReplace: boolean
): string => {
    let res: string = route;
    if (paramMustBeReplace) {
        params.forEach((param: string): void => {
            const option = options[param];
            if (option === undefined) {
                throw new Error(`Missing parameter: ${param}`);
            }
            res = res.replace(`{${param}}`, `${option}`);
        });
    } else {
        params.forEach((param: string): void => {
            res = res.replace(`{${param}}`, `:${param}`);
        });
    }
    return res;
};

const addRestOptionsToQueryString = (
    route: string,
    options: { [key: string]: string },
    params: Array<string>
): string => {
    const restOptions = Object.keys(options).filter(
        (option: string) => !params.includes(option)
    );
    let res: string = route;
    let isFirst: boolean = true;
    restOptions.forEach((restOption: string): void => {
        if (isFirst) {
            res = `${res}?${restOption}=${options[restOption]}`;
            isFirst = false;
        } else res = `${res}&${restOption}=${options[restOption]}`;
    });
    return res;
};
