import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'


export default function InputFiledComp({pH}) {
  return (
    <View style={{
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#2C3E50'
    }}>
      <TextInput placeholder={pH} />
    </View>
  )
}