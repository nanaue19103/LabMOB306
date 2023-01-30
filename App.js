import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,FlatList,Button,ListView } from 'react-native';

export default function App() {
  const [name,setName] = useState('');
  const [id,setId] = useState('');
  const [data,setData] = useState([]);
  const addToList =()=>{
    setData([...data,{name,id}]);
    setName('');
    setId('');
  };
  
  return (
    <View style={styles.container}>
      <TextInput 
      placeholder='Name: '
      value={name}
      onChangeText={Text => setName(Text)}
      >       
      </TextInput>
      <TextInput 
      placeholder='Id: '
      value={id}
      onChangeText={Text => setId(Text)}
      >       
      </TextInput>
      <Button
      title='btn'
      onPress={addToList}
      >

      </Button>
      <FlatList
      data={data}
      renderItem={({item})=>(
        <View>
          <Text>Name :{item.name}</Text>
          <Text>Id :{item.id}</Text>
        </View>
      )}
      KeyE={(item, index)=>index.toString()}
      >

      </FlatList>
    </View>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
