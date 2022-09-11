import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

function ButtonComp({title, onPress, mT, mB, mL, mR}) {

  return (
    <TouchableOpacity
    style={{
        marginTop: mT,
        marginLeft: mL ? mL : 0,
        marginRight: mR ? mR : 0,
        marginBottom: mB
    }}
    onPress={onPress}>
        <View style={{
            backgroundColor: '#3800EC',
            padding: 10
        }}>
            <Text style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold'
            }}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default  ButtonComp;