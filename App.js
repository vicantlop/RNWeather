import { View, StyleSheet } from 'react-native'
import UpcomingWeather from './src/screens/UpcomingWeather';
import CurrentWeather from './src/screens/CurrentWeather';
import City from './src/screens/City';

const App = () => {
  return (
    <View style={styles.container}>
      <City />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
export default App;