/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {

  ScrollView,
  View,
  Image,	 
  Text,
  TextInput,
  FlatList,
  StyleSheet

} from 'react-native';


function Menu_Header() {
  return(
      <View 
        style={{
          flexDirection: "row",
          height: 25,
          padding: 1
        }}
      >
        <Text  style={{ flex: 0.4}}>Categories </Text>
        <Text  style={{ flex: 0.6}}>Menu Items </Text>
      </View>  
  );
 }
 const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

function Category_Items(){
  return(
    <View 
      style={{
       flexDirection: "row",
       height: 25,
        padding: 1
      }}
    >
    <FlatList  style={{ flex: 0.4}} git 
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.id}
    />
    <FlatList  style={{ flex: 0.6}} data={DATA} horizontal={true} 
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.id}
    />
  </View>    
  )
  
}
const styles = StyleSheet.create({
  item: {

  },
  title: {
    fontSize: 32,
  },
});

function Popularity() {
  return(
    <View>
      <Text style={{flex: 0.5}}>Most Popular for the week</Text>
      <Text style={{flex: 0.5}}>Least Popular for the week</Text>
    </View>
  );
}
function Homeless_Donation() {
  return(
    <View>
      <Text > Click to donate remaining dishes to the less fortunate</Text>
    </View>
  );
}




export default function App(){
  return(
	  <ScrollView>
	  	<View>
	  		<Text> Enter the image you see below </Text>
	  		<Image  source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}} style={{width: 200, height: 200}}/>
	    	</View>
	  	<TextInput
	  		style={{height: 40, borderColor: 'gray', borderWidth: 1 }}
	        	defaultValue="Enter what you see here"
	        />
       <Menu_Header />
       <Category_Items />
       <Popularity />
       <Homeless_Donation />

	  </ScrollView>
 
 );
}
