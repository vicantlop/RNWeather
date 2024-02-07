import { SafeAreaView, StyleSheet, View, Text, FlatList, StatusBar, ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons'

const DATA = [
    {
        dt_txt: "2022-08-30 10:00:00",
        main: {
            temp_min: 8.55,
            temp_max: 7.55,
        },
        weather: [
            {
                main: "Clear"
            }
        ]
    },
    {
        dt_txt: "2022-08-30 13:00:00",
        main: {
            temp_min: 292.84,
            temp_max: 294.94,
        },
        weather: [
            {
                main: "Rain"
            }
        ]
    },
    {
        dt_txt: "2022-08-30 17:00:00",
        main: {
            temp_min: 92.84,
            temp_max: 94.94,
        },
        weather: [
            {
                main: "clouds"
            }
        ]
    }
]

const Item = (props) => {
    const { dt_txt, min, max, condition } = props;
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}

const UpcomingWeather = () => {
    const renderItem = ({ item }) => {
        return (
            <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.image} source={require('../../assets/upcoming-background.jpg')}>
                <Text>
                    Upcoming Weather
                </Text>

                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    image: {
        flex: 1,
    }
});

export default UpcomingWeather;