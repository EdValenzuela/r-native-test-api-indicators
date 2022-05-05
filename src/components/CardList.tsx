import React, { FC } from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Bitcoin } from '../interfaces/indicator';

import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../theme/appTheme';

interface Props{
  nameCoin: Bitcoin;
}

const CardList:FC<Props> = ({nameCoin}) => {
  const navigation = useNavigation<any>();

  const goToDetail = (codigo:string) => {
    navigation.navigate('Detalle' as never, { codigo });
  };

  const { nombre, unidad_medida, codigo } = nameCoin;

  return (
    <>
      <ScrollView> 
        {unidad_medida && nombre && (
          <TouchableOpacity onPress={() => goToDetail(codigo)}>
            <View>{nombre && <Text style={styles.title}>{nombre}</Text>}</View>
            <View style={{
              flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
            }}>
              {unidad_medida && <Text style={styles.colorText}>{unidad_medida}</Text>}
              <Icon name="alert-circle-outline" size={40} color="cyan" />
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
    </>
  );
};

export default CardList;