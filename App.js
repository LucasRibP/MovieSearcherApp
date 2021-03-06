import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";
import MainScreenNav from "./src/screens/MainScreenNav";
import i18n from "i18n-js";
import R from "./src/res/R";
import * as Localization from "expo-localization";
import { ThemeProvider } from "react-native-elements";

i18n.translations = {
  en: R.strings["en-US"],
  pt: R.strings["pt-br"],
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;
i18n.defaultLocale = "en";

export default function App() {
  return (
    <ThemeProvider theme={R.palette.base}>
      <Provider store={store}>
        <View style={styles.root}>
          <MainScreenNav />
        </View>
      </Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
