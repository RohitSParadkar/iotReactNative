import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { TouchableOpacity } from 'react-native-web';

const GridView = () => {
    const [items, setItems] = React.useState([
        { name: 'Bed Room', code: '7' ,url:require('../assets/livingRoom.jfif')},
        { name: 'Kitchen', code: '5',url:require('../assets/kitchen.jfif') },
        { name: 'Drawing room', code: '10',url:require('../assets/livingRoom.jfif') },
        { name: 'AMETHYST', code: '11',url:require('../assets/livingRoom.jfif') },
        { name: 'WET ASPHALT', code: '6',url:require('../assets/livingRoom.jfif') },
        { name: 'GREEN SEA', code: '4' ,url:require('../assets/livingRoom.jfif')},
    ]);
    return (
        <FlatGrid
            itemDimension={130}
            data={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            spacing={10}
            renderItem={({ item }) => (
                <TouchableOpacity>
                <View style={[styles.itemContainer, styles.IconCard]}>
                    <Image
                        style={styles.img}
                        source={item.url}
                    />
                    <Text style={styles.itemName}>{item.name} </Text>
                    <Text style={styles.itemCode}>{item.code} Devies</Text>
                </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default GridView

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        height: 115,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    IconCard: {
        backgroundImage: 'linear-gradient(308deg, #363E51 0%, #4C5770 97.32%)',
    },
    img: {
        width: 40,
        height: 40,
        borderRadius:'50%'
    }
})