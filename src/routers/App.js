import { StackNavigator, TabNavigator } from 'react-navigation';

import { StackNavigatorConfig, TabNavigatorConfig } from '../Config'
import { Live, Recommend, News, Video, Home } from './index'

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
        Live: {
            screen: Live,
        },
        Recommend: {
            screen: Recommend,
        },
        News: {
            screen: News,
        },
        Video: {
            screen: Video,
        },
    },
    StackNavigatorConfig({
        initialRouteName: "Tab",
    }),
);
export default Routers;
