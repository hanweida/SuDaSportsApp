import { StackNavigator, TabNavigator } from 'react-navigation';

import { StackNavigatorConfig, TabNavigatorConfig } from '../Config'
import { Live, Recommend, News, Video } from './index'

const Home = TabNavigator(
    {
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
    TabNavigatorConfig,
);

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
    StackNavigatorConfig,
);
export default Routers;
