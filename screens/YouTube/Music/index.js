import React from 'react'
import { ScrollView, Text, View, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-paper'
import Hero from '../../../components/Hero'

const YouTubeMusicDownloader = () => {

    const [ytUrl, setYTUrl] = React.useState("")

    return (
        <ScrollView style={ styles.container }>
            <Hero />
            <View><Text style={ { color: "#fff" } }>Enter YouTube URL</Text></View>
            <TextInput style={ styles.textInput } placeholderTextColor="#6b6b6b" onChangeText={ (text) => setYTUrl(text) } placeholder="ex. https://youtube.com/watch?v=..." />
            <Button contentStyle={ { backgroundColor: "#292929", borderRadius: 8, elevation: 10 } } color="#d2cdcd" onPress={ () => alert(ytUrl) } >Proceed</Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    textInput: {
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: "#292929",
        marginVertical: 10,
        borderRadius: 8,
        elevation: 10,
        color: "#d2cdcd"
    }
})

export default YouTubeMusicDownloader
