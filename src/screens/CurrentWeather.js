import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

export default function CurrentWeather({weatherData}) {
  const { wrapper, container, tempStyles, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles

  const {main: {temp, feels_like, temp_max, temp_min}, weather} = weatherData

  const weatherCondition = weather[0].main

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>{`Feels Like ${feels_like}`}</Text>
        <RowText message1={`High: ${temp_max}`} message2={`Low: ${temp_min}`} containerStyles={highLowWrapper} message1Styles={highLow} message2Styles={highLow} />
      </View>
      <RowText message1={weather[0].description} message2={weatherType[weatherCondition].message} containerStyles={bodyWrapper} message1Styles={description} message2Styles={message} />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
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