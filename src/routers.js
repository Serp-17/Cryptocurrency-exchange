import Home from './pages/Home';
import Help from './pages/Help';
import Check from './pages/Check';
import Rules from './pages/Rules';
import Contact from './pages/Contact';

import {
    HELP_ROUTE,
    HOME_ROUTE,
    CHECK_ROUTE,
    RULES_ROUTE,
    CONTACT_ROUTE
} from './utils/consts';

export const authRouter = [
    // { path: ADMIN_ROUTE, Component: <Admin/> },
    // { path: BASKET_ROUTE, Component: <Basket/> },
];

export const publicRouter = [
    { path: HOME_ROUTE, Component: <Home/> },
    { path: HELP_ROUTE, Component: <Help/> },
    { path: CHECK_ROUTE, Component: <Check/> },
    { path: RULES_ROUTE, Component: <Rules/> },
    { path: CONTACT_ROUTE, Component: <Contact/> },
];