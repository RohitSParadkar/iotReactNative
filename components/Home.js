import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Cards from './Cards'
import { GreenCard, BlueCard, IconCard, Weathercard } from './Cards'
import TransperantCards from './TransperantCards'
import { SectionGrid } from 'react-native-super-grid';
import GridView from './GridView'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.h2Text}>Hello Rohit</Text>
        <Text style={styles.h3Text}>Welcome to Home</Text>
      </View>
      <View style={styles.topSection}>
        <Weathercard />
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.h3Text}>Your Rooms</Text>
         <GridView/>
      </View>
      <View style={styles.bottomSection}>

      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242C3B'
  },
  text: {
    color: 'white'
  },

  icon: {
    width: 50,
    height: 50
  },
  heading: {
    flex: 0.21
  },
  topSection: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundImage: 'linear-gradient(101deg, #97C4D2 11.98%, #DD96D6 119.18%)',
  },
  middleSection: {
    flex: 0.5,

  },
  bottomSection: {
    flex: 0.5,
  },
  h2Text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 35
  },
  h3Text: {
    color: 'white',
    fontSize: 15
  }
})