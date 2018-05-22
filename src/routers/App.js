import { StackNavigator, TabNavigator } from 'react-navigation';

import { StackNavigatorConfig, TabNavigatorConfig } from '../Config'
import { Home, Match } from './index'

const TabNav = TabNavigator(
    {
        Home: {
            screen: Home,
        },
        Name: {
            screen: Home,
        },
    },
    TabNavigatorConfig(),
);

const Routers = StackNavigator(
    {
        Tab: {
            screen: TabNav,
        },
        Match: {
            screen: Match,
        },
    },
    StackNavigatorConfig({
        initialRouteName: "Tab",
    }),
);
export default Routers;
