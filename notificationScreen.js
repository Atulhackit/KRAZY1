
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text,StyleSheet,Button } from "react-native";


export default class NotificationsScreen extends React.Component {
    static navigationOptions ={
      drawerLabel:'Notification',
      drawerIcon:()=>(
        <Ionicons name="ios-notifications" size={32} color="green" />
        ),
      };
      render() {
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
            title="go to Notification"
            onPress={()=> this.props.navigation.navigate('Category',{greet:'love uh to'})}
          />
          <Text>this is NotificationScreen</Text>   
          
          
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
