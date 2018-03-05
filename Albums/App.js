import React, {Component} from 'react'
import {View} from 'react-native'
import AlbumList from './src/components/AlbumList'

export default class App extends Component {
  render() {
    return (
      <View>
        <AlbumList />
      </View>
    )
  }
}