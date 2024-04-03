import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import imageBallon from '../assets/imageBallon.png'

const StoriesComponent = () => {
  return (
    <View>
      <ScrollView horizontal style={Styles.scrollStyle} >
        <Image source={imageBallon} style={Styles.ImageStyle} />
        <Image source={imageBallon} style={Styles.ImageStyle} />
        <Image source={imageBallon} style={Styles.ImageStyle} />
        <Image source={imageBallon} style={Styles.ImageStyle} />
        <Image source={imageBallon} style={Styles.ImageStyle} />
        <Image source={imageBallon} style={Styles.ImageStyle} />
        <Image source={imageBallon} style={Styles.ImageStyle} />
        <Image source={imageBallon} style={Styles.ImageStyle} />
        <Image source={imageBallon} style={Styles.ImageStyle} />
      </ScrollView>
    </View>
  )
}

const Styles = StyleSheet.create({
  ImageStyle: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 20,
  },
  scrollStyle: {
    paddingTop: 10,
    paddingBottom: 5
  }
})

export default StoriesComponent