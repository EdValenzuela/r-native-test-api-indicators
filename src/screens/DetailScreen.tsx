import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { StackNavigationOptions, StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useFetch from '../hooks/useFetch';

import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../theme/appTheme';

import { transformDate } from '../utils';

interface Props extends StackScreenProps<RootStackParams, 'Detalle'>{};

const DetailScreen = ({ route, navigation }: Props) => {

  const { codigo } = route.params;
  
  const {data, loading} = useFetch(`https://mindicador.cl/api/${codigo}`);
  console.log({data})
  const insets = useSafeAreaInsets();


  const options: StackNavigationOptions = {
    title: codigo || 'Código',
    headerTitleStyle: {
      fontSize: 25,
      textTransform: 'uppercase',
    },
  };

  useEffect(() => {
    navigation.setOptions(options);
  }, []);

  const renderSpace = () => (<View style={styles.space} />)

  return (
    <View style={{...styles.globalMargin, marginTop : insets.top + 20, marginBottom: 80}}>
      {loading ? (
        <ActivityIndicator size="large" color="cyan" />
      ) : (
          <FlatList
            keyExtractor={(item,i) => item?.fecha+i}
            data={data?.serie}
            renderItem={(item) => (
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.colorText}>{transformDate(item?.item?.fecha)}</Text>
                <Text>{`$ ${item?.item?.valor}`}</Text>
              </View>
            )}
            ItemSeparatorComponent={ renderSpace }
          />
      )}

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity  
          onPress={ () => navigation.goBack()}
          style={styles.btnBack}
        >
          <Text style={styles.txtBack}>Volver</Text>
          <Icon name="return-down-back-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default DetailScreen