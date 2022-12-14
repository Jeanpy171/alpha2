import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainHeader from '../components/MainHeader'
import { useState } from 'react';
import Input from '../components/Input';
import axios from 'axios';
import Button from '../components/Button';

const UpdatePassword = ({navigation}) => {
    const [userData, setUserData] = useState({password: '', newPassword: ''});
  const [errorNewPassword, setErrorNewPassword] = useState();
  const [errorPassword, setErrorPassword] = useState();
  
  const validate = () => {

  }
  const UpdatePassword = async (password, newPassword) => {
    try {
        console.log("Actualizando contrasena . . . ")
        const response = await axios.post(
            'https://alphao2.herokuapp.com/api/alpha/login',
            { email, password },
            { headers: { 'accept': 'application/json' } }
        )
        console.log("DATOS EXTRAIDOS")
        console.log(response.data)
        const {access_token, token_type, user} = response.data.data 
        console.log(access_token)
        console.log(token_type)
        console.log(user)
        //setIsLoading(false)
        navigation.navigate('home')
    } catch (e) {
      console.log(e)
      alert("Cuenta no encontrada");
      //setIsLoading(false)
    }
  }
  return (
    <View style={styles.container}>
      <MainHeader screen={"Actualizar Contraseña"} name={'ios-menu-outline'} onPress={() => navigation.openDrawer()}/>
      <View style={{width:"90%"}}>
        <View style={{paddingVertical:20}}>

        <Text style={styles.title}>
            No estas seguro con tu contraseña actual?
        </Text>
        <Text style={styles.subtitle}>
          Puedes modificarla en este apartado.
        </Text>
        <Input
            onChangeText={text => {
              setErrorPassword("")
              setUserData({...userData, password:text})}
            }
            //onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Nueva contraseña"
            placeholder="Ingresa tu nueva contraseña"
            error={errorPassword}
            maxLength={15}
            password
            keyboard='default'
            editable={true}
            value={userData.password}
          />
          <Input
            onChangeText={text => {
              setErrorPassword("")
              setUserData({...userData, newPassword:text})}
            }
            //onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Confirma tu contraseña"
            placeholder="Ingresa nuevamente tu nueva contraseña"
            error={errorNewPassword}
            maxLength={15}
            password
            keyboard='default'
            editable={true}
            value={userData.newPassword}
          />
          <Button title="ACTUALIZAR CONTRASENA" onPress={validate} />
        </View>
        </View>
    </View>
  )
}

export default UpdatePassword

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //justifyContent: 'center',
    },
  title:{
    fontSize:20,
    textAlign:'left',
    fontFamily: 'Poppins_500Medium',
    paddingVertical:5,
},
subtitle:{
  fontSize:15,
  textAlign:'left',
  fontFamily: 'Poppins_500Medium',
  paddingVertical:10,
},
  });
  