import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { BackdropFilter } from "@shopify/react-native-skia";

const Cards = () => {
    return (
        <View style={styles.continer}>
            <View style={styles.staticCard}>
                <Text style={styles.lightText}>Cards</Text>
            </View>
        </View>
    )
}

export const IconCard = () => {
    return (
        <View style={styles.IconCard}>
            <Text style={styles.lightText}>Cards</Text>
                <Image
                    style={styles.img}
                    source={require('../assets/Frame.png')}
                />
        </View>
    )
}

export const GreenCard = () => {
    return (
        <View style={styles.continer}>
            <View style={styles.greenCard}>
                <Text style={styles.lightText}>Cards</Text>
            </View>
        </View>
    )
}
export const Weathercard = () => {
    return (
        <View style={styles.continer}>
            <View style={styles.weatherCard}>
                <View>
                <Image
                    style={styles.img}
                    source={require('../assets/Frame.png')}
                />
                <View>
                <Text style={styles.lightText}>Mostly Clody </Text>
                <Text style={styles.lightText}>Mumbai India</Text>
                </View>
                <View style={styles.weatherInfo}>
                <View >
                <Text style={styles.lightText}>27<span>&#8451;</span></Text>
                <Text style={styles.lightText}>Sensible</Text>
                </View>
                <View>
                <Text style={styles.lightText}>4%</Text>
                <Text style={styles.lightText}>Precipitaion</Text>
                </View>
                <View>
                <Text style={styles.lightText}>66%<span>&#8451;</span></Text>
                <Text style={styles.lightText}>Humidity</Text>
                </View>
                <View>
                <Text style={styles.lightText}>16 km/h<span>&#8451;</span></Text>
                <Text style={styles.lightText}>Wind</Text>
                </View>
                </View>
                </View>
                <View>

                </View>
            </View>
        </View>
    )
}

export const BlueCard = () => {
    return (
        <View style={styles.continer}>
            <View style={styles.blueCard}>
                <Text style={styles.lightText}>Cards</Text>
                <Image
                    style={styles.img}
                    source={require('../assets/Frame.png')}
                />
            </View>
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    staticCard: {
        backgroundImage: 'linear-gradient(308deg, #363E51 0%, #4C5770 97.32%)',
        width: 350,
        height: 224,
        borderRadius: 20,
        border: '1 solid #FFF'
    },
    img: {
        width: 40,
        height: 40
    },
    greenCard: {
        backgroundImage: 'linear-gradient(122deg, #61DE70 -22.05%, #0DA6C2 77.18%)',
        // 'linear-gradient(310deg, #320DAF -34.39%, #9327F0 81.12%)'
        width: 350,
        height: 224,
        borderRadius: 20,
        border: '1 solid #FFF'
    },
    blueCard: {
        backgroundImage: 'linear-gradient(104deg, #0DA6C2 9.19%, #0E39C6 112.14%)',
        width: 350,
        height: 224,
        borderRadius: 20,
        border: '1 solid #FFF'
    },
    lightText: {
        color: 'white'
    },
    IconCard: {
        backgroundImage: 'linear-gradient(308deg, #363E51 0%, #4C5770 97.32%)',
        width: 150,
        height: 150,
        borderRadius: 20,
        border: '1 solid #FFF'
    },
    weatherCard:{
        width: 350,
        height: 224,
        borderRadius: 20,
        border: '1 solid #FFF',
        backgroundImage: 'linear-gradient(308deg, #363E51 0%, #4C5770 97.32%)',
    },
    weatherInfo:{
      flex:1,
      flexDirection:'row',
      columnGap:10
    }
})