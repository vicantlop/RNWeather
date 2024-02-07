import { StyleSheet, View, Text } from "react-native";
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

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props;
    const { item, date, temp } = styles
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
});

export default ListItem;