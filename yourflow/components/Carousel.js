import React, { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import NavCircle from './NavCircle';
import moment from "moment";

const { width } = Dimensions.get('window');

const NavCarousel = ({onScroll, data}) => {
  const carouselRef = useRef(null);
  const [itemArr, setItemArr] = useState(data)

  function randomColor(){
    var num = Math.floor(Math.random() * itemArr.length)
    return itemArr[num].backgroundColor
  }

  {/** This function allows for the days to change when you slide */}
  function handleScrollEnd(item) {
    onScroll(item)
  }

  function renderItem({ item, index }) {
    const { backgroundColor, date } = item;
    return (
      <NavCircle
        color={backgroundColor}
        day={date.format("dd")[0]}
        date={date}
        key={date.format("MMMMDDYYYY")}
        number={date.format("D")}
        pos={index}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
      />
      );
    };

    return (
      <Carousel
        className="scroll-smooth scale-95 overflow-hidden"
        data={itemArr}
        renderItem={renderItem}
        containerWidth={width}
        itemContainerStyle={{overflow: "hidden"}}
        itemWidth={200}
        initialIndex={1}
        inActiveScale={0.55}
        inActiveOpacity={0.85}
        onEndReached={() => {
            setItemArr(oldArr => [...oldArr, { 
              backgroundColor: randomColor(), 
              date: moment().add(itemArr.length - 1, 'd'),
              pos: itemArr.length
            }])
        }
        }
        onEndReachedThreshold={0.9}
        onScrollEnd={handleScrollEnd}
        ref={carouselRef}
        separatorWidth={5}
        disableVirtualization={true}
        removeClippedSubviews={true}
        maxToRenderPerBatch={3}
        windowSize={5}
        initialNumToRender={5}
      />
    );
  }

export default NavCarousel
