import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  Share,
} from "react-native";
import { Image, Divider, FAB } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import R from "res/R";

import ResultInfo from "./ResultInfo";

import { useGetMovieByIMDbIDQuery } from "library/networking/omdbAPI";
import { useSelector } from "react-redux";
import _ from "lodash";

export default ResultScreen = ({ route }) => {
  const { imdbID } = route.params;
  const [item, setItem] = useState({});
  const favorites = useSelector((state) => state.favorites.value);
  const skip = Object.keys(favorites).includes(imdbID) || !_.isEmpty(item);

  const { data, isLoading } = useGetMovieByIMDbIDQuery(imdbID, { skip });

  const cur_item = skip ? favorites[imdbID] : data;
  const isThereLoading = skip ? false : isLoading;

  useEffect(() => {
    if (!isThereLoading) {
      setItem(cur_item);
    }
  }, [data]);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.imageContainer}>
        {isThereLoading ? (
          <></>
        ) : (
          <Image
            source={{ uri: item["Poster"] }}
            PlaceholderContent={<ActivityIndicator />}
            style={styles.imageStyle}
          />
        )}
      </View>
      <Divider style={styles.divider} />
      <ScrollView style={styles.resultInfoScrollView}>
        {isThereLoading ? <></> : <ResultInfo data={item} />}
      </ScrollView>
      <FAB
        placement="right"
        icon={<Icon name="share" size={22} color={R.colors.white} solid />}
        onPress={() =>
          Share.share({ message: `https://www.imdb.com/title/${imdbID}/` })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: "40%",
  },
  imageStyle: {
    marginHorizontal: "20%",
    marginTop: "5%",
    width: "60%",
    height: "95%",
  },
  divider: {
    marginTop: "5%",
  },
  resultInfoScrollView: {
    marginTop: "2%",
    width: "100%",
    flex: 1,
  },
});

/* Example data


Object {
  "Actors": "Sterling Holloway, Edward Brophy, Herman Bing",
  "Awards": "Won 1 Oscar. 5 wins & 1 nomination total",
  "BoxOffice": "N/A",
  "Country": "United States",
  "DVD": "13 Dec 2015",
  "Director": "Samuel Armstrong, Norman Ferguson, Wilfred Jackson",
  "Genre": "Animation, Adventure, Drama",
  "Language": "English",
  "Metascore": "96",
  "Plot": "The stork delivers a baby elephant to Mrs. Jumbo, veteran of the circus, but the newborn is ridiculed because of his truly enormous ears and dubbed \"Dumbo\". After being separated from his mother, Dumbo is relegated to the circus' clown acts; it is up to his only friend, a mouse, to assist Dumbo to achieve his full potential.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNWVmNWQ2OTQtNzJlNC00ZmQwLTg4ZTktZTNmM2IxZTlkOGM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  "Production": "Walt Disney Productions",
  "Rated": "G",
  "Ratings": Array [
    Object {
      "Source": "Internet Movie Database",
      "Value": "7.2/10",
    },
    Object {
      "Source": "Rotten Tomatoes",
      "Value": "98%",
    },
    Object {
      "Source": "Metacritic",
      "Value": "96/100",
    },
  ],
  "Released": "31 Oct 1941",
  "Response": "True",
  "Runtime": "64 min",
  "Title": "Dumbo",
  "Type": "movie",
  "Website": "N/A",
  "Writer": "Joe Grant, Dick Huemer, Otto Englander",
  "Year": "1941",
  "imdbID": "tt0033563",
  "imdbRating": "7.2",
  "imdbVotes": "122,914",
}
*/
