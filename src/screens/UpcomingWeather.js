import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from "react-native";
import ListItem from "../components/ListItem";

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

const UpcomingWeather = () => {
    const renderItem = ({ item }) => {
        return (
            <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
        )
    }
    const { container, image} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground style={image} source={require('../../assets/upcoming-background.jpg')}>
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
    image: {
        flex: 1,
    }
});

export default UpcomingWeather;