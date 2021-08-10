import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useGetMovieByIMDbIDQuery } from "library/networking/omdbAPI";

export default ResultScreen = ({ route }) => {
  const { imdbID } = route.params;
  const { data, error, isLoading } = useGetMovieByIMDbIDQuery(imdbID);
  console.log(data);
  return (
    <View style={styles.screenContainer}>
      <Text>Movie Information</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
