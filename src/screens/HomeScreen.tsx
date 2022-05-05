import React, { useContext, useEffect } from 'react'
import { StackNavigationOptions, StackScreenProps } from '@react-navigation/stack'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { IndicatorContext } from '../context/IndicatorContext'

import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../theme/appTheme'
import CardList from '../components/CardList'


interface Props extends StackScreenProps<any, any>{};

const HomeScreen = ({navigation}:Props) => {

  const insets = useSafeAreaInsets();

  const { data, loading } = useContext(IndicatorContext);

  const options: StackNavigationOptions = {
    headerLeft : () => (<Icon name="logo-bitcoin" size={40} color="black" />),
    title: 'Listado de indicadores',
    headerRight: () => (<Icon name="cash-outline" size={40} color="black" />),
    headerTitleStyle: {
      fontSize: 20,
      textTransform: 'uppercase',
    },
    headerStyle: {
      backgroundColor: 'transparent',
    },
    cardStyle:{
      paddingHorizontal: 20,
    },
    headerTintColor: 'black',
  };

  useEffect(() => {
    navigation.setOptions(options);
  }, []);

  const renderSpace = () => (
    <View style={{ marginBottom: 10}} />
  )

  return (
    <View style={{...styles.globalMargin, marginTop : insets.top + 20}}>
      {
        loading ? (
            <ActivityIndicator size="large" color="cyan" />
          ) : 
          (
            <FlatList
              data={Object.keys(data)}
              renderItem={({ item }) => <CardList nameCoin={data[item]} />}
              keyExtractor={ (item: any, i) => item?.codigo+i }
              ItemSeparatorComponent={ renderSpace }
            />
          )
      }
    </View>
  )
}

export default HomeScreen