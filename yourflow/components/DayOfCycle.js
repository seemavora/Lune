import { View, Text } from 'react-native'
import React from 'react'

const DayOfCycle = ({color, day}) => {
  //bg-[#ef460e]
  return (
    <View className="flex-row items-center mx-7">
        <View className=" px-2 py-1.5 rounded-lg" style={{backgroundColor: color}}>
            <Text className="font-black text-md text-white tracking-widest">DAY {day}</Text>
        </View>
        <Text className="font-bold ml-2 tracking tracking-normal">OF YOUR CYCLE</Text>
    </View>
  )
}

export default DayOfCycle