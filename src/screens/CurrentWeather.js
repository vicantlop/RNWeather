import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

export default function CurrentWeather({weatherData}) {
  const { wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles
  console.log(weatherData)
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText message1={'High: 8'} message2={'Low: 4'} containerStyles={highLowWrapper} message1Styles={highLow} message2Styles={highLow} />
      </View>
      <RowText message1={weatherType['Thunderstorm'].icon} message2={weatherType['Thunderstorm'].message} containerStyles={bodyWrapper} message1Styles={description} message2Styles={message} />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
});