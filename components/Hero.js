import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Hero = () => {
    const WhiteText = ({ children, style, ...args }) => <Text style={ [{ color: "#FFF" }, style] } { ...args }>{ children }</Text>
    return (
        <View style={ styles.container }>
            <ImageBackground style={ { width: "100%", height: "100%" } } imageStyle={ { resizeMode: "cover", borderRadius: 15 } } source={ { uri: "https://source.unsplash.com/500x500/?google" } }>
                <LinearGradient
                    colors={ ['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.9)'] }
                    style={ {
                        height: "100%",
                        borderRadius: 15,
                        padding: 20,
                        justifyContent: "center"
                    } }
                >
                    <WhiteText style={{
                        fontSize: 25,
                        fontWeight: "bold"
                    }}>YouTube</WhiteText>
                    <WhiteText style={{
                        fontSize: 15
                    }}>Music Downloader</WhiteText>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        width: "100%",
        backgroundColor: "#292929",
        borderRadius: 15,
        elevation: 10
    }
})

export default Hero
