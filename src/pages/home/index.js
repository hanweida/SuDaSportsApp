/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab'
import Live from './live/Live'
import News from './news/News'
import Recommend from './recommend/Recommend'
import Video from './video/Video'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            selectedIndices: [0],
            customStyleIndex: 1,
        }
    }

    componentWillMount() {
        this.setState({
            customStyleIndex: 1,
        });
    }
    componentDidMount() {
        this.handleCustomIndexSelect(0);
    }
    handleSingleIndexSelect = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    }

    handleMultipleIndexSelect = (index) => {
        if (this.state.selectedIndices.includes(index)) {
            this.setState({
                ...this.state,
                selectedIndices: this.state.selectedIndices.filter((i) => i !== index),
            });
        } else {
            this.setState({
                ...this.state,
                selectedIndices: [
                    ...this.state.selectedIndices,
                    index,
                ],
            });
        }
    }

    handleCustomIndexSelect = (index) => {
        this.setState({
            ...this.state,
            customStyleIndex: index,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tab}>
                    <SegmentedControlTab
                        values={['推荐', '直播', '视频', '新闻']}
                        selectedIndex={this.state.customStyleIndex}
                        onTabPress={this.handleCustomIndexSelect}
                        borderRadius={8}
                        tabsContainerStyle={{
                            height: 30, backgroundColor: '#FFFFFF', width: 258, alignSelf: 'center',
                        }}
                        tabStyle={{
                            backgroundColor: '#FFFFFF', borderWidth: 0, borderColor: '#E7E7E7', borderStyle: 'solid',
                        }}
                        activeTabStyle={{ backgroundColor: 'white', marginTop: 0 }}
                        tabTextStyle={{ color: '#000000' }}
                        activeTabTextStyle={{ color: '#2979FF' }}
                    />
                </View>

                <View style={styles.container}>
                    {this.state.customStyleIndex === 0 &&
                        <View style={styles.container}>
                            <Recommend />
                        </View>
                    }
                    {this.state.customStyleIndex === 1 &&
                        <View style={styles.container}>
                            <Live />
                        </View>
                    }
                    {this.state.customStyleIndex === 2 &&
                        <View style={styles.container}>
                            <Video />
                        </View>
                    }
                    {this.state.customStyleIndex === 3 &&
                    <View style={styles.container}>
                        <News />
                    </View>
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tab: {
        flexDirection: 'row',
        height: 48,
        justifyContent: 'center',
        borderBottomColor: '#F66A85',
        backgroundColor: '#FFFFFF',
    },
    tabViewText: {
        color: '#444444',
        fontWeight: 'bold',
        fontSize: 18,
    },
    titleText: {
        color: '#444444',
        padding: 20,
        fontSize: 14,
        fontWeight: '500',
    },
    headerText: {
        padding: 8,
        fontSize: 14,
        color: '#444444',
    },
    tabContent: {
        backgroundColor: '#000000',
        flexGrow: 1,
    },
    Seperator: {
        marginHorizontal: -10,
        alignSelf: 'stretch',
        borderTopWidth: 1,
        borderTopColor: '#888888',
        marginTop: 24,
    },
})
