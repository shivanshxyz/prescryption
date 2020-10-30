import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Menu extends Component {
    render(){
        return (
            <View style={styles.container}>
            <Image source={require('../assets/menubg.png')} style={styles.bg}/>
            
            <Text style={styles.txt} onPress={() => this.props.navigation.navigate('Scan')}>Consultation</Text>
            <Text style={styles.txt} onPress={() => this.props.navigation.navigate('RxList')}>Prescription</Text>
            <Text style={styles.txt}>Pharmacy</Text>
            <TouchableOpacity style={styles.img} onPress={() => this.props.navigation.navigate('Scan')}><Image source={require('../assets/x.png')} style={{flex:0.2, resizeMode:'contain', marginTop:50}}/></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1768AC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txt:{
        fontFamily:'Open Sans',
        fontSize:50,
        color:'#EBF5FF',
        marginBottom:20,
    },
    img: {
      },
    bg: {
        flex:0.8,
        resizeMode:'contain',
        alignSelf:'center',
        marginBottom:70,
        marginTop:40,
    }
  });
  