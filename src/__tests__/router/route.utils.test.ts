import { RouteInterface } from "../../router/routes";
import { path } from "../../router/route.utils";

describe('Test router functions', () => {

    const routes: { [key: string]: RouteInterface } = {
        toUriEncode: {
            path: 'to encode/route'
        },
        noParam: {
            path: 'params/{test}'
        },
        missingParam: {
            path: 'params/{test}/{paramBis}'
        },
        paramReplace: {
            path: 'params/{test}/{paramBis}'
        }
    };

    it('should be throw error if route not found', () => {
        expect(() => {
            path('not-route-found', null, true, routes);
        }).toThrow(Error)
    })

    it('should be encode uri route', () => {
        const r = path('toUriEncode', null, true, routes);
        expect(r).toBe('to%20encode/route');
    })

    it('should be throw error if params not provide', () => {
        expect(() => {
            path('noParam', null, true, routes);
        }).toThrow(Error)
    })

    it('should be throw error if missing params', () => {
        expect(() => {
            path('missingParam', {test: 'toto'}, true, routes);
        }).toThrow(Error)
    })

    it('should be replace params', () => {
        const r = path('paramReplace', {test: 'toto', paramBis: 'param-bis'}, true, routes);
        expect(r).toBe('params/toto/param-bis');
    })

    it('should be replace params and add one rest', () => {
        const r = path('paramReplace', {test: 'toto', paramBis: 'param-bis', key: 'sshhh'}, true, routes);
        expect(r).toBe('params/toto/param-bis?key=sshhh');
    })

    it('should be replace params and add all rest', () => {
        const r = path('paramReplace', {test: 'toto', paramBis: 'param-bis', key: 'sshhh', bis: 'yep', again: 'again'}, true, routes);
        expect(r).toBe('params/toto/param-bis?key=sshhh&bis=yep&again=again');
    })

    it('should be convert params', () => {
        const r = path('paramReplace', null, false, routes);
        expect(r).toBe('params/:test/:paramBis');
    })
    
})