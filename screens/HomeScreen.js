import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Platform,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  StatusBar,
  FlatList,
} from "react-native";
import * as Icons from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import MaskedView from "@react-native-community/masked-view";
import Svg, { Rect } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { getMovies } from "../models/api";
import Rating from "./Headers/Rating";
import Genres from "./Headers/Genres";

const { width, height } = Dimensions.get("window");
const SPACING = 10;
const ITEM_SIZE = width * 0.72;
const BACKDROP_HEIGHT = height * 0.65;
const bg_color = "#232323";

const Backdrop = ({ movies, scrollx }) => {
  return (
    <View
      style={{
        position: "absolute",
        width,
        marginTop: 30,
        height: BACKDROP_HEIGHT,
      }}
    >
      <FlatList
        data={movies}
        keyExtractor={(item) => item.key + "-backdrop"}
        removeClippedSubviews={false}
        contentContainerStyle={{
          width,
          height: BACKDROP_HEIGHT,
        }}
        renderItem={({ item, index }) => {
          if (!item.backdrop) {
            return null;
          }
          const translateX = scrollx.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: "absolute",
                width: translateX,
                height,
                overflow: "hidden",
              }}
            >
              <Image
                source={{ uri: item.backdrop }}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  position: "absolute",
                }}
              />
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

function HomeScreen({ navigation }) {
  const [movies, setstate] = useState([]);
  const scrollx = useRef(new Animated.Value(0)).current;
  const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();

      setstate([{ key: "left-spacer" }, ...movies, { key: "right-spacer" }]);
    };
    if (movies.length === 0) {
      fetchData(movies);
    }
  }, [movies]);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.bell_icon}
          onPress={() => navigation.toggleDrawer()}
        >
          <Icons.MaterialIcons
            name="sort"
            size={24}
            color="#fff"
            backgroundColor="#232323"
          ></Icons.MaterialIcons>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            right: 0,
            marginRight: 5,
            marginTop: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <Icons.Feather name="bell" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <StatusBar hidden />
        <Backdrop movies={movies} scrollx={scrollx} />
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          data={movies}
          keyExtractor={(item) => item.key}
          horizontal
          contentContainerStyle={{
            alignItems: "center",
          }}
          snapToInterval={ITEM_SIZE}
          snapToAlignment="start"
          decelerationRate={0}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollx } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
          renderItem={({ item, index }) => {
            if (!item.poster) {
              return (
                <View
                  style={{ width: SPACER_ITEM_SIZE }}
                  // backgroundColor="red"
                />
              );
            }
            const inputRange = [
              (index - 2) * ITEM_SIZE,
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE,
            ];

            const translateY = scrollx.interpolate({
              inputRange,
              outputRange: [100, 50, 100],
              extrapolate: "clamp",
            });

            return (
              <View style={{ width: ITEM_SIZE }}>
                <Animated.View
                  style={{
                    marginHorizontal: SPACING,
                    padding: SPACING * 2,
                    transform: [{ translateY }],
                    // height: 10,
                    alignItems: "center",
                    backgroundColor: `${bg_color}`,
                    borderRadius: 34,
                  }}
                >
                  <Image
                    source={{ uri: item.poster }}
                    style={styles.posterImage}
                  />
                  <Text style={styles.text_style} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Rating rating={item.rating} />
                  <Genres genres={item.genres} />
                  <Text
                    style={{ fontSize: 18, color: "#fff", textAlign: "center" }}
                    numberOfLines={3}
                  >
                    {item.description}
                  </Text>
                </Animated.View>
              </View>
            );
          }}
        />
      </View>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${bg_color}`,
  },
  posterImage: {
    width: "100%",
    height: ITEM_SIZE * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  cards: {
    marginTop: SPACING,
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    // height: 10,
    alignItems: "center",
    backgroundColor: `${bg_color}`,
    borderRadius: 34,
  },
  text_style: {
    fontSize: 24,
    color: "#fff",
  },
  bell_icon: {
    backgroundColor: `${bg_color}`,
    width: 40,
    marginRight: 5,
    marginTop: 5,
  },
});
