import React from 'react';
import { Image, Text, View } from 'react-native';
import { Vimeo } from 'react-native-vimeo-iframe';
import WebView from 'react-native-webview';
import { Icon } from 'react-native-eva-icons'
import { useNavigation } from '@react-navigation/native';
const VideoRender = ({ route }) => {
    const videoId = route.params
    const navigation = useNavigation();
    console.log("gwqfsdahgqwas", videoId.videoId)
    return (
        <View style={{ flex: 1, }}>
            <View>
                <Icon name="close" width={60} height={60} fill='grey' onPress={()=>navigation.goBack()} />
            </View>
            <View style={{ width: '100%', height: 200,marginTop:'55%' }}>
                <Vimeo
                    scalesPageToFit={true}
                    // style={{width:'100%',height:180}}
                    videoId={videoId.videoId}
                    onPlay={() => alert("play clicked")}
                    onFinish={() => console.log('Video is finished')}
                    loop={false}
                    autoPlay={true}
                    controls={true}
                    speed={false}
                    time={'0m10s'}
                />
                {/* <Image style={{width:'100%',height:180}} source={require('../assets/images/i1.jpeg')}/> */}
            </View>
            
        </View>
    )
}
export default VideoRender;