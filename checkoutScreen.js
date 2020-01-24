import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text,StyleSheet,Button } from "react-native";

export default class Checkout extends React.Component {
    static navigationOptions ={
      drawerLabel:'Cart',
      drawerIcon:()=>(
        <Ionicons name="shoppingcart" size={32} color="green" />
        ),
      };
      render() {
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
            title="go to Myaccount"
            onPress={()=> this.props.navigation.navigate('Account',{greet:'love uh to'})}
          />
          <Text>this is Checkout</Text>   
          
          
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
