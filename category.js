import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text,StyleSheet,Button } from "react-native";

export default class Category extends React.Component {
    static navigationOptions ={
      drawerLabel:'Category',
      drawerIcon:()=>(
        <Ionicons name="" size={32} color="green" />
        ),
      };
      render() {
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
            title="go to category"
            onPress={()=> this.props.navigation.navigate('Checkout',{greet:'love uh to'})}
          />
          <Text>ShopbyCategory</Text>  
          
          
          
        </View>
      );
    }
  }
  const styles = StyleSheet.create ({  
    container: {  
        flex: 1,  
        backgroundColor:"#fff" ,
        alignContent:'center',         
        justifyContent:'center'            
    },    
});  
