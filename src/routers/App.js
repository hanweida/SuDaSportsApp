import { StackNavigator, TabNavigator } from 'react-navigation';

import { StackNavigatorConfig, TabNavigatorConfig } from '../Config'
import { Home } from './index'

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
    },
    StackNavigatorConfig({
        initialRouteName: "Tab",
    }),
);
export default Routers;
