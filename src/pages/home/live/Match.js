import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    NativeModules,
} from 'react-native';

const apiurls = {
    nbaurl: 'http://120.78.150.194:8080/video/getnbaurl.biz',
    matchStat: 'http://120.78.150.194:8080/gamedata/matchStat.biz',
}
export default class Match extends Component {
    static navigationOptions = () => ({
        title: '标题',
        headerTitleStyle: { fontSize: 18, color: 'red' },
        headerStyle: { height: 40 },
    });

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            matchdata: null,
            loaded: false,
        };
    }

    componentWillMount() {
        this.mounted = true;
    }

    componentDidMount() {
        this.getData();
    }

    componentWillUnmount() {
        this.mounted = false;
    }
    onTabPress=(item, mid) => {
        NativeModules.WebviewRNModule
            .show(`${apiurls.nbaurl}?url=${item.sourceValue}&mid=${mid}&sourceName=${item.sourceName}&liveSource=${item.liveSource}`);
    }

    // 请求数据
    getData=() => {
        const navi = this.props.navigation;
        const { state } = navi;

        const matchStatUrl = `${apiurls.matchStat}?mid=${state.params.item.mid}
        &tabType=2&homeTeamName=${state.params.item.home_team}&guestTeamName=${state.params.item.guest_team}`;
        fetch(matchStatUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                if (this.mounted) {
                    this.setState({
                        loaded: true,
                        matchdata: responseJson,
                    });
                }
            });
    }

    /* 渲染视图数据 */
    renderLoadingView=() => {
        return (
            <View >
                <Text>
                    正在加载...
                </Text>
            </View>
        );
    }
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        const arr = [];
        const matchData = this.state.matchdata.data;
        for (let i = 0; i < matchData.matchSourceList.length; i++) {
            const customComponent = (
                <View key={i}>
                    <TouchableOpacity onPress={() => this.onTabPress(matchData.matchSourceList[i], matchData.mid)}>
                        <Text>{matchData.matchSourceList[i].sourceName}</Text>
                    </TouchableOpacity>
                </View>
            );
            arr.push(customComponent);
        }
        return (
            <View>
                <View>{arr}</View>
            </View>
        );
    }
}
