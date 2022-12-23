import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const NavCircle = ({ day, number, color }) => {
  return (
    <TouchableOpacity className="rounded-full shadow-sm my-3 justify-around py-8 items-center" style={{width:200, height:200, backgroundColor: color}} activeOpacity={.9}>
            <Text className="text-white font-extrabold text-5xl">{day}</Text>
            <Text className="text-white font-extrabold text-5xl">{number}</Text>
    </TouchableOpacity>
  )
}

export default NavCircle