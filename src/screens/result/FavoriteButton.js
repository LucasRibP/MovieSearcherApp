import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import R from "res/R";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/slices/favoriteSlice";
import { useGetMovieByIMDbIDQuery } from "library/networking/omdbAPI";
import { storeFavorites } from "../../library/utils/storeCacheLoader";

export default FavoriteButton = ({ id }) => {
  const favorites = useSelector((state) => state.favorites.value);
  const active = Object.keys(favorites).includes(id);
  const dispatch = useDispatch();

  // It won't make 2 calls, because RTK Query is cacheing the result of this
  // API call, this happens as the page required to load this button loads.
  const { data, isError, isLoading } = useGetMovieByIMDbIDQuery(id, {
    skip: active,
  });

  useEffect(() => {
    storeFavorites(favorites);
  }, [favorites]);

  const item = active ? favorites[id] : data;
  const isThereError = active ? false : isError;
  const isThereLoading = active ? false : isLoading;

  const saveFavorite = () => {
    if (isThereLoading) {
      setTimeout(saveFavorite, 50);
      return;
    }
    if (!isThereError) {
      dispatch(toggleFavorite(item));
    }
  };

  return (
    <Button
      icon={
        <Icon name="star" size={22} color={R.colors.white} solid={active} />
      }
      onPress={saveFavorite}
      containerStyle={styles.componentContainer}
    />
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    ...R.palette.rightHeaderButton,
  },
});
