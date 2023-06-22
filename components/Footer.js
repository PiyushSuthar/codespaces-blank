import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: "#fff", textAlign: "center"}}>
                Hellow World
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 40,
        marginTop: 20
    }
})

export default Footer
