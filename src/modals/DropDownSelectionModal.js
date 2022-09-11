import React from 'react'
import { View, Text, Modal, TouchableWithoutFeedback, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native'


function DropDownSelectionModal({visible, dataList, selectedRow, closeModel, type}) {

    let dopDownType = type;

    const ListRenderUi = ({item}) => {
        return(
        <TouchableOpacity style={{marginTop: 10}} onPress={() => selectedRow(item, type)}>
            <View style={{borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{
                        color: 'white',
                    }}>{item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
        )
    }


    
    return (
    <Modal
    visible={visible}
    animationType="slide"
    transparent={true}
    style={{margin: 0, justifyContent: 'flex-end'}}>
        
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.head}>
                    <Text style={styles.text}>Select Type</Text>
                    <TouchableWithoutFeedback onPress={() => closeModel()}>
                        <Image style={{
                            width: 15,
                            height: 15,
                        }} source={require('../assets/close.png')} />
                    </TouchableWithoutFeedback>
                </View>

                <FlatList style={{marginTop: 10}}
                data={dataList}
                keyExtractor={list => list.id.toString()}
                renderItem={({item}) => <ListRenderUi item={item} />
                }/>
            </View>

        </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    main: {
        backgroundColor: '#2C3E50',
        height: '50%',
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    text: {
        fontSize: 25,
        color: '#2C3E50',
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10
      },
})

export default DropDownSelectionModal;