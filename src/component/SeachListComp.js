import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


function SeachListComp() {
  return (
    <View style={styles.main}>
        <View style={{padding: 10}}>
            <Text style={styles.text}>Maths Notes for class 9th</Text>
            <Text style={{color: '#7F8C8D', fontSize: 12}}>25/08/2022</Text>
            <Text
            numberOfLines={2}
            ellipsizeMode='tail'
            style={{color: '#7F8C8D', marginTop: 10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
            <View style={{flexDirection: 'row', marginTop: 7, alignItems: 'center', flex: 1}}>
                <View style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{width: 25, height: 25}} source={require('../assets/avatar.png')} />
                    <Text style={{marginLeft: 10, color: '#2C3E50'}}>Zain Ul Abideen</Text>
                </View>
                <View style={{flex: 0.5, justifyContent: 'flex-end', flexDirection: 'row'}}>
                    <Text style={styles.more}>Details..</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    more: {
        textAlign: 'right',
        backgroundColor: '#3498DB',
        color: 'white',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 1,
        paddingBottom: 1
    },
    text: {
        fontSize: 20,
        color: '#2C3E50',
        fontWeight: 'bold'
    },
    main: {
        flexDirection: 'row',
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10, 
    },
    line: {
        width: 5,
        backgroundColor: '#FB6E61',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    }
})

export default SeachListComp;