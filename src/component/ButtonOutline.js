import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


export default function ButtonOutline({title, onPress, mT}) {
  return (
    <TouchableOpacity
    style={{
        marginTop: mT,
        marginLeft: 20,
        marginRight: 20
    }}
    onPress={onPress}>
        <View style={{
            padding: 10,
            borderColor: 'blue',
            borderWidth: 2
        }}>
            <Text style={{
                color: 'blue',
                textAlign: 'center',
                fontWeight: 'bold'
            }}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}