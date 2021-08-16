import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeFavorites = async (data) => {
  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem("favorites", jsonData);
  } catch (e) {
    console.log(e);
  }
};

export const retrieveFavorites = async () => {
  try {
    const jsonData = await AsyncStorage.getItem("favorites");
    return jsonData != null ? JSON.parse(jsonData) : null;
  } catch (e) {
    console.log(e);
  }
};
