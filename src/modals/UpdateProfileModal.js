import { View, Text, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import InputFiledComp from '../component/InputFiledComp'
import ButtonComp from '../component/ButtonComp'

function UpdateProfileModal({close, show}) {
  return (
    <Modal transparent={true} visible={show}>
      <View style={{flex: 1, backgroundColor:"rgba(0,0,0,0.75)", padding: 20, justifyContent: 'center'}}>
        <View style={{backgroundColor: 'white', padding: 10, borderRadius: 5}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.name}>Update Profile</Text>
                <TouchableOpacity onPress={()=>close()}>
                    <Image style={{width: 20, height: 20}} source={require('../assets/bl_close.png')} />
                </TouchableOpacity>
            </View>
            <InputFiledComp pH={'Name'} />
            <ButtonComp title={'UPDATE'} mT={15} mB={20}/>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        color: '#2C3E50',
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10
    }
})


export default UpdateProfileModal;