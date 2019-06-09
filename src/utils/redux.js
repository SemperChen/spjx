import {
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import {createNavigationPropConstructor} from 'react-navigation-redux-helpers/src/middleware';

const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);
const navigationPropConstructor = createNavigationPropConstructor('root');

export { reactNavigationReduxMiddleware, navigationPropConstructor };
//框架封装方法 千万千万别改！