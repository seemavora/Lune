import { View, Text, SafeAreaView} from 'react-native'
import React, {useState} from 'react'
import Carousel from '../components/Carousel'
import InformationBoxes from '../components/InformationBoxes'
import moment from 'moment'
import TrackerCircle from '../components/TrackerCircle'
import Triangle from 'react-native-triangle'

const data = [
  { backgroundColor: 'black',  date: moment().subtract(1,'d'), pos: 0},
  { backgroundColor: '#ef460e',  date: moment(), pos: 1},
  { backgroundColor: '#ff8647', date: moment().add(1,'d'), pos: 2},

];

const HomeScreen = () => {
  const [currentItem, setItem] = useState({date: data[1].date, backgroundColor: data[1].backgroundColor, pos: 1})
  return (
    <SafeAreaView className="bg-[#fff1ea] h-full">

      {/* This contains the main elements of the page */}
      <View className='items-center'>

        <Text className="font-bold text-base pt-3 mb-6">HELLO, MEY</Text>
 
        <Text className="font-extrabold text-4xl mb-2 text-[#0c1c24]">{currentItem.date.format("MMMM DD, YYYY").replace(/\b0/g, '')}</Text>

        <Triangle
          width={20}
          height={18}
          color={'black'}
          direction={'down'}
          className="rounded-tl-sm rounded-tr-sm rounded-b-sm -mb-3"
        />
        
        {/** This is the carousel for the days. IDK if it'll be the final use but it is functional */}
        <View className="h-1/3">
          <Carousel
            onScroll={(currentItem) => setItem(currentItem)}
            data={data}
          />  
        </View>  

        {/** This portion contains the components of the DAY ## OF YOUR CYCLE and the dots indicators on the right */}
        <View className="float-left w-full flex-row px-2">
          <View className="flex-row items-center mx-7">
            <View className="px-2 py-1.5 rounded-lg" style={{backgroundColor: currentItem.backgroundColor}}>
                <Text className="font-black text-md text-white tracking-widest">DAY {currentItem.pos}</Text>
            </View>
            <Text className="font-bold ml-2 tracking-normal">OF YOUR CYCLE</Text>
          </View>

          <View className="flex-row float-right ml-auto mr-6">
           <TrackerCircle 
            color={currentItem.backgroundColor}
            height={15}
            width={15}
            number={currentItem.backgroundColor == '#ef460e' ? 3 : currentItem.backgroundColor == '#ff8647' ? 2 : 1
            }
           />
          </View>
        </View>

        <View className="mx-7 my-4 w-full">
          <InformationBoxes
            daysAway={currentItem.date.daysInMonth() - currentItem.date.date()}
          />
        </View>
      </View>

      {/* This contains the bottom navigation */}
      <View className="bg-white h-1/4 flex-row justify-around shadow rounded-2xl mt-4">
        <View className="rounded-full border-black h-12 w-12 border my-3 ml-5"></View>
        <View className="rounded-full border-black h-12 w-12 border my-3"></View>
        <View className="rounded-full border-black h-12 w-12 border my-3 mr-5"></View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen