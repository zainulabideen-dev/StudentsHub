import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import SafeAreaComp from '../component/SafeAreaComp'
import DropDownComp from '../component/DropDownComp'
import InputFiledComp from '../component/InputFiledComp'
import ButtonComp from '../component/ButtonComp'
import DropDownSelectionModal from '../modals/DropDownSelectionModal'

function UploadScreen() {

  const [showModal, setShowModal] = useState(false)
  const [listData, setListData] = useState([])
  const [year, setYear] = useState()
  const [payment, setPayment] = useState()
  const [educationLevel, setEducationLevel] = useState()
  const [schoolClass, setSchoolClass] = useState()
  const [uploadType, setUploadType] = useState()
  const [showNotesFields, setShowNotesFields] = useState(false)
  const [type, setType] = useState('')

  function getPayment(){
    const list = [
      {id: 1, name: 'Free'},
      {id: 2, name: 'Paid'}
    ]
    setDataType(list, 'select-pay')
  }

  function getYears(){
    const list = [
      {id: 1, name: '1st Year'},
      {id: 2, name: '2nd Year'},
      {id: 3, name: '3rd Year'},
      {id: 4, name: '4rth Year'},
    ]
    setDataType(list, 'select-year')
  }

  function showUploadType(){
    const list = [
      {id: 1, name: 'Notes/Books'},
      {id: 2, name: 'Educational Assesories'},
    ]
    setDataType(list, 'upload-type')
  }

  function getEducationLevel(){
    const list = [
      {id: 1, name: 'School'},
      {id: 2, name: 'College'},
      {id: 3, name: 'University'}
    ]
    setDataType(list, 'education-level')
  }

  function getClass(){
    const list = [
      {id: 1, name: 'Class 01'},
      {id: 2, name: 'Class 02'},
      {id: 3, name: 'Class 03'},
      {id: 4, name: 'Class 04'},
      {id: 5, name: 'Class 05'},
      {id: 6, name: 'Class 06'},
      {id: 7, name: 'Class 08'},
      {id: 8, name: 'Class 09'}
    ]
    setDataType(list, 'class')
  }

  function setDataType(list, type){
    setType(type)
    setListData(list)
    setShowModal(true)
  }

  function itemSelected(item, type){
    console.log(type)
    if(type=='upload-type'){
      if (item.name=='Notes/Books') setShowNotesFields(true)
      else if(item.name=='Educational Assesories') setShowNotesFields(false)
      setUploadType(item)
      setShowModal(false)
    }else if(type=='select-year'){
      setYear(item)
      setShowModal(false)
    }else if(type=='select-pay'){
      setPayment(item)
      setShowModal(false)
    }else if(type=='education-level'){
      setEducationLevel(item)
      setShowModal(false)
    }else if(type=='class'){
      setSchoolClass(item)
      setShowModal(false)
    }
  }

  return (
    <SafeAreaComp>
      <DropDownSelectionModal
      selectedRow={(item, type) => itemSelected(item, type)}
      visible={showModal}
      dataList={listData}
      type={type}
      closeModel={() => setShowModal(false)} />

      <View style={styles.header}>
        <View style={{flex: 0.8}}>
          <Text style={styles.title}>Upload</Text>
          <Text style={{fontSize: 17}}>Notes or Educational Assesories</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <InputFiledComp pH={'Title'} />
          <DropDownComp value={uploadType ? uploadType.name: ''} title={'Select Upload Type'} onPress={() => showUploadType()}/>
          <DropDownComp title={'Upload an Image'} image={require('../assets/upload.png')} />
          <InputFiledComp pH={'Subject'} />
          <View style={styles.box}>
            <TextInput placeholder='Description' />
          </View>
          {showNotesFields ? <DropDownComp value={educationLevel ? educationLevel.name: ''} title={'Select Education Level'} onPress={() => getEducationLevel()} /> : null}
          {showNotesFields ? <DropDownComp value={schoolClass ? schoolClass.name: ''} title={'Select Class'} onPress={() => getClass()}/> : null}
          {showNotesFields ? <DropDownComp value={year ? year.name: ''} title={'Select Year'} onPress={() => getYears()} /> : null}
          <DropDownComp value={payment ? payment.name: ''} title={'Select Payment'} onPress={() => getPayment()}/>
          <ButtonComp title={'UPLOAD'} mT={10} mB={20}/>
        </View>
      </ScrollView>
    </SafeAreaComp>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  box: {
    height: 150,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2C3E50'
  },
  line: {
    backgroundColor: '#ABB2B9',
    width: '100%',
    height: 2
  },
  header: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#2C3E50',
    fontWeight: 'bold'
  }
})

export default UploadScreen;