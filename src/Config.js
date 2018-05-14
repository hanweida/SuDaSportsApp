
const StackNavigatorConfig = options => {
    const { initialRouteName: InitialRouteName = "" } = options
    return {
        initialRouteName: InitialRouteName,
        mode: 'card', // 页面跳转方式 card - 原生系统默认的的跳转;modal - 只针对iOS平台，模态跳转
        initialRouteParams: { initPara: '初始页面参数' },
        navigationOptions: {
            title: '标题',
            headerTitleStyle: { fontSize: 18, color: 'red' },
            headerStyle: { height: 0 },
        },
        cardStyle: { backgroundColor: "#ffffff" },
        transitionConfig: (() => ({
        })),
        onTransitionStart: (() => {
            console.log('页面跳转动画开始')
        }),
        onTransitionEnd: (() => {
            console.log('页面跳转动画结束')
        }),
    }
}

const TabNavigatorConfig = () => {
    return {
        tabBarPosition: 'bottom',
        swipeEnabled: false, // 禁止左右滑动
        tabBarOptions: {
            activeTintColor: '#2979FF',
            inactiveTintColor: '#000000', // 文字和图片默认颜色
            showIcon: true,
            indicatorStyle: { height: 0 },
            style: {
                backgroundColor: '#FFFFFF', // TabBar 背景色
                height: 62,
            },
            labelStyle: {
                fontSize: 11, // 文字大小
            },
            tabStyle: {
                height: 70,
            },
        },
    }
}

module.exports = {
    StackNavigatorConfig,
    TabNavigatorConfig,
}
