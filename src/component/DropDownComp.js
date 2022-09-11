import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


function DropDownComp({title, image, onPress, value}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={{
        padding: 12,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2C3E50'
    }}>
      <View>
        <Text>{title}</Text>
        {value ? <Text>{value}</Text> : null}
      </View>
      <Image style={{width: 20, height: 20}} source={image == undefined ? require('../assets/down.png') : image} />
    </View>
    </TouchableOpacity>
  )
}

export default DropDownComp;