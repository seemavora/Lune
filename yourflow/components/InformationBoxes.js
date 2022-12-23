import { View, Text } from 'react-native'
import React from 'react'
import TrackerCircle from './TrackerCircle'

const InformationBoxes = ({daysAway}) => {
  return (
    <View className="mx-9">
        <View className="rounded-lg border-[#656462] bg-white flex-row py-7 px-5" style={{borderWidth:1.4,}}>
            <TrackerCircle color={"#0b1c24"} width={50} height={50} number={1} />
            <Text className="ml-9 tracking-wider leading-loose text-base" style={{maxWidth: 200,}}>
                You are <Text className="font-bold text-[#101e26]">{daysAway}</Text> days away from the first day of your next cycle.
            </Text>
        </View>

        <View className="rounded-lg border-[#656462] bg-white flex-row py-7 px-5 mt-4" style={{borderWidth:1.4,}}>
            <TrackerCircle color={"#0b1c24"} width={50} height={50} number={1}/>
            <Text className="ml-9 tracking-wider leading-loose text-base text-[#101e26]" style={{maxWidth: 200,}}>
                Symptoms you may be experiencing include:{'\n'} 
                <Text className="font-bold text-[#101e26]">NAUSEA</Text> {'\n'}
                <Text className="font-bold text-[#101e26]">BREAST TENDERNESS</Text>{'\n'} 
                <Text className="font-bold text-[#101e26]">ABDOMINAL PAIN</Text> 
            </Text>
        </View>
    </View>
  )
}

export default InformationBoxes