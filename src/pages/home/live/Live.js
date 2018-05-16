import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

export default class Live extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: this.getData(),
            myindex: 1,
            loaded: false,
        };
    }

    componentWillMount() {
        this.mounted = true;
        this.getData();
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    onTabPress(item) {
        this.props.prop.navigation.navigate('Zhibo_Match', { item })
    }

    getData() {
        fetch('http://120.78.150.194:8080/video/gamenbalist.biz')
            .then((response) => response.json())
            .then((responseJson) => {
                if (this.mounted) {
                    this.setState({
                        loaded: true,
                        listData: responseJson,
                    });
                }
            });
    }

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.listItem}
                onPress={this.onTabPress.bind(this,item,index)}
            >
                <View style={styles.container}>
                    <View style={styles.teamLogo}>
                        <View >
                            <Image source={{ uri: item.guest_logo_url }} style={styles.image} resizeMode='stretch' />
                        </View >
                        <View>
                            <Text style={styles.text}>{item.guest_team}</Text>
                        </View>
                    </View>
                    <View style={styles.scoreInfo}>
                        <View>
                            <Text style={styles.text}>{item.guest_team_score}</Text>
                        </View>
                        <View>
                            <View>
                                {item.match_quarter !== "" &&
                                <Text>{item.match_quarter}-{item.match_quarterTime}</Text>
                                }
                                {item.match_quarter === "" &&
                                <Text>{item.start_time}</Text>
                                }
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <Image source={require('../../../img/zhibo_icon/直播icon.png')} ></Image>
                                <Text style={[styles.text]}>视频直播</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text}>{item.home_team_score}</Text>
                        </View>
                    </View>
                    <View style={styles.teamLogo}>
                        <View >
                            <Image source={{uri:item.home_logo_url}} style={styles.image} resizeMode='stretch'></Image>
                        </View>
                        <View>
                            <Text style={styles.text}>{item.home_team}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }



    _sectionComp = ({section, index}) => {
        var txt = section.key;
        return (
            <View style={[styles.compView,{backgroundColor:"#E5E6EC"}]}>
                <Text
                    style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 14 }}>{txt}
                </Text>
            </View>
        )

    }

    /** 渲染视图数据*/
    renderLoadingView(){
        return (
            <View style={styles.container}>
                <Text>
                    正在加载...
                </Text>
            </View>
        );
    }


    _keyExtractor = (item, index) => 'Manufacturer' + index;

    _extraUniqueKey(item ,index){
        //console.log("index"+index);
        return "index"+index;
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <View style={styles.view}>
                <SectionList
                    keyExtractor={this._extraUniqueKey}
                    renderSectionHeader={this._sectionComp}
                    renderItem={this.renderItem}
                    sections={this.state.listData}
                    initialNumToRender={8}
                    refreshing={false}
                    onRefresh={() => {
                    }}
                    onEndReached={()=>{
                        if(this.state.myindex<2){
                          if(null != this.getData()){
                              this.setState({
                                listData: this.state.listData.concat(this.getData()),
                              });
                          }
                        }
                    }}
                />
            </View>
        )
    }

    footerView() {
        return <View style={{flex:1,height:30,justifyContent:'center',alignItems:'center'}}>
            <Text>到底啦</Text>
        </View>

    }
}

const itemHeight = 90;
const contentWeight = Dimensions.get('window').width;
const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    container: {
        height: itemHeight,
        width: contentWeight,
        flexDirection: 'row',

    },
    listItem: {
        flex: 1,
        height: itemHeight,
        borderBottomWidth: 1,
        borderBottomColor: '#E7E7E7',
    },
    image: {
        height: 40,
        width: 60,
    },
    text: {
        fontSize: 15,
    },
    teamLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'space-around',
    },
    scoreInfo: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
