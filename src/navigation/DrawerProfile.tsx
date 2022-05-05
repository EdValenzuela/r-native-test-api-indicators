import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { View, Text, Image } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme'

const DrawerProfile = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.imgContainer}>
        <Image 
          source={ require('../assets/img/3it.jpg') }
          style={styles.avatar} 
          />
      </View>
      <View style={styles.containerProfile}>
        <Icon name="settings-sharp" size={30} color="black" />
        <Text style={styles.textProfile}>
          Prueba Dev EValenzuela &copy;
        </Text>
      </View>
    </DrawerContentScrollView>
  )
}

export default DrawerProfile