import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import SafeAreaComp from '../component/SafeAreaComp'
import UpdateProfileModal from '../modals/UpdateProfileModal'

function ProfileScreen() {

  const [show, setShow] = useState(false)

  const dataList = [
    {id: 1, name: 'My Uploads', image: require('../assets/prof_user.png')},
    {id: 2, name: 'Update Profile', image: require('../assets/pen.png')},
    {id: 3, name: 'Logout', image: require('../assets/logout.png')}
  ]

  const ProfileOptions = ({item, onPress}) => {
    return <TouchableOpacity onPress={() => onPress(item)}>
      <View style={{padding: 10, borderBottomColor: '#3498DB', borderRadius: 10, borderBottomWidth: 1, marginTop: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Image style={{width: 20, height: 20}} source={item.image} />
          <Text style={{marginLeft: 10, color: 'black', fontWeight: '500'}}>{item.name}</Text>
        </View>
    </View>

    </TouchableOpacity>
  }

  function handlePress(item){
    setShow(true)
  }

  return (
    <SafeAreaComp>
      <UpdateProfileModal show={show} close={()=>setShow(false)} />
      <View style={{flex: 1, padding: 15}}>

        <View style={{flex: 0.3}}>
          <View style={{flexDirection: 'row'}}>
            <Image style={{width: 70, height: 70}} source={require('../assets/avatar.png')} />
            <View style={{marginLeft: 15, justifyContent: 'center'}}>
              <Text style={styles.name}>Zain ul Abideen</Text>
              <Text>zainulabideendev@gmail.com</Text>
            </View>
          </View>
        </View>

        <View style={{flex: 0.7}}>
          <FlatList style={{marginTop: 20}}
          data={dataList}
          keyExtractor={list => list.id.toString()}
          renderItem={({item}) => <ProfileOptions item={item} onPress={(item)=> handlePress(item)} />
          }/>
        </View>

      </View>
    </SafeAreaComp>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    color: '#2C3E50',
    fontWeight: 'bold'
  }
})


export default ProfileScreen;