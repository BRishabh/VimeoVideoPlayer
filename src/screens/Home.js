import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Image
}
from "react-native";
import {Platform} from 'react-native';

import { Vimeo } from 'react-native-vimeo-iframe';
import { WebView } from 'react-native-webview';


const Home = () => {
    const Data = [
        {
            id: 1, videoID: '596827202',
            title: "Self-Awareness",
            sub: "Song Star",
            view: '20M views',
            upload: "1 hour ago"
        },
        {
            id: 2, videoID: '596826823',
            title: "Program Overview",
           
            sub: "Song Star",
            view: '20M views',
            upload: "1 hour ago"
        },
        {
            id: 3, videoID: '596819309',
            title: "Meditation for Habit Hacks",
            sub: "Song Star",
            view: '20M views',
            
            upload: "1 hour ago"
        },
        {
            id: 4, videoID: '596815252', 
            title: "Look What You’ve Done!",
            sub: "Song Star",
            view: '20M views',
            upload: "1 hour ago"
        },
        {
            id: 5, videoID: '596814329', 
            title: "Log Jam Activity ",
            sub: "Song Star",
            view: '20M views',
            upload: "1 hour ago"
        },
        {
            id: 6, videoID: '596813526', 
            title: "Field Guide Tour",
            sub: "Song Star",
            view: '20M views',
            upload: "1 hour ago"
        },
        {
            id: 7, videoID: '596784352', 
            title: "Trust the foot",
            sub: "Song Star",
            view: '20M views',
            upload: "1 hour ago"
        },
        {
            id: 8, videoID: '594958510', 
            title: "Bonus- H.A.L.T",
            sub: "Song Star",
            view: '20M views',
            upload: "1 hour ago"
        },

    ]


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContainer}>
                
                <FlatList
                    data={Data}
                    renderItem={({ item }) => (

                        <View style={styles.innerBox2}>
                            <View style={{ height: 250, width: "100%" }}>


                                <Vimeo
                                    videoId={item.videoID}
                                    onReady={console.log('Video is ready')}
                                    onPlay={console.log('video is play')}
                                    // onPlayProgress={(data) => console.log('Video progress data:', data)}
                                    // loop={true}
                                    autoPlay={false}
                                    onPause={console.log("PAuse")}
                                controls={true}
                                // speed={true}
                                // time={'0m0s'}
                                onFinish={ console.log('Video is finished')}

                                />
                            </View>
                            <View style={styles.cardBottom}>
                                {/* <Image
                                    source={{
                                        uri: "https://yt3.ggpht.com/l_ZIXrVEQcHTBTsmpt2CFiWJF9_0hwB3rngr1_lxozZ3Lz58Ij5TcDFOp2TYlioU2gI9RlyExw=s900-c-k-c0x00ffffff-no-rj"
                                    }}
                                    style={{ height: 80, width: 80, }}
                                /> */}
                                <View style={{ margin: 7 }}>
                                    <Text style={styles.title}>{item.title}</Text>

                                    <View style={styles.descip}>
                                        <Text style={styles.subText}>This is a tutorial of how to handle Screen Orientation changes
                                            on the React Native mobile
                                            applications without any third-party packages.

                                        </Text>
                                        {/* <Text>{item.sub}</Text>
                                        <Text>{item.view}</Text>
                                        <Text>{item.upload}</Text> */}
                                    </View>
                                </View>
                            </View>

                        </View>

                    )}
                    keyExtractor={item => item.id}


                />


            </View>
            <View
                style={{
                    marginRight: 5,
                    position: "relative",
                    alignItems: "flex-end",
                    // marginTop:5,
                    marginTop: "-29%",
                    backgroundColor: 'rgba(52, 52, 55, 0.0)'
                }}>
                <Text style={{ color: "#80d4ff", textAlign: "justify" }}>Powered by</Text>
                <Image
                    source={require("../assest/logo.png")}
                    style={{ height: 50, width: 60, alignItems: "center", marginRight: 10 }} />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    mainContainer: {
        flex: 1,
        marginVertical: 10
        // justifyContent:"space-between",
        // paddingHorizontal:30
    },

    innerBox2: {
        flex: 1,
        // height: "200%",
        // width: "100%",
        justifyContent: 'space-between',
        // paddingHorizontal: 3


    },
    list: {
    },
    backgroundVideo: {
        height: 250,
        width: '100%',
    },
    descip: {
        marginTop: 5,
        color: "gray"
        // justifyContent: "space-evenly",
        // flexDirection: "row",
    },
    title: {
        marginTop: -10,
        fontSize: 17,
        fontWeight: "700"
    },
    cardBottom: {
        flexDirection: "row",
        alignItems: "center",
    },
    subText: {
        color: "#666666",
        textAlign: "justify",

    }


})
export default Home;