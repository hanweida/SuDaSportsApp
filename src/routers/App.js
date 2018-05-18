import { StackNavigator, TabNavigator } from 'react-navigation';

import { StackNavigatorConfig, TabNavigatorConfig } from '../Config'
import { Home, Zhibo_Match } from './index'

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
            screen: Zhibo_Match
        },
    },
    StackNavigatorConfig({
        initialRouteName: "Tab",
    }),
);
export default Routers;
