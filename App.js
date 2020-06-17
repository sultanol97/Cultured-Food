import React from 'react';
import { FlatList, StyleSheet, Text, View,TextInput} from 'react-native';

 const DATA =[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]

export default FlatListBasics = () => {
    return (
      <View >
      <TextInput
	  		style={styles.text}
	        	defaultValue="Enter what you see here"
	        />

        <FlatList
          data={DATA}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          horizontal={true}
         
        />
        <Text style={styles.text}> yooo </Text>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          horizontal={true}
         
        />
      </View>
      
      
    );
}

const styles = StyleSheet.create({
  container: {
   flex: .25,
   paddingTop: 22,
   backgroundColor:'#2c9de8',
  },
  item: {
    padding: 35,
    fontSize: 18,
    height: 94,
    borderRadius:20,
    borderColor: 'black',
  },
  text:{
 
  height: 30, borderColor: 'gray', borderWidth: .5,
    //paddingRight: 15,
    fontSize: 28,
    height: 44,
    paddingTop:0,
    paddingBottom:5,
    textAlign:'center',
  },
})
