import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text,StyleSheet,Button } from "react-native";



export default class MyAccountScreen extends React.Component {
    static navigationOptions ={
      drawerLabel:'Account',
      drawerIcon:()=>(
        <Ionicons name="account-outline" size={32} color="green" />
      ),
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
            title="go to Home"
            onPress={()=> this.props.navigation.navigate('Home',{greet:'love uh to'})}
          />
          <Text>MyAccountScreen</Text>   
          
          
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
 
