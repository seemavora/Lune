import { View} from 'react-native'
import React from 'react'

const TrackerCircle = ({color, height, width, number}) => {
  var numTrack = [];
  for(let i = 0; i < number; i++){
    numTrack.push(
    <View key={i} className="rounded-full mx-1 self-center" style={{width:width, height:height, backgroundColor: color}}>
    </View>)
  }
  return (
      numTrack
  )
}

export default TrackerCircle