import i18n from "i18n-js";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default ResultInfo = ({ data }) => {
  return (
    <View style={styles.componentContainer}>
      <Text style={styles.genreText}>{data["Genre"]}</Text>
      <Text style={styles.releaseText}>
        {i18n.t("resultScreen.releaseText")}
        {data["Released"]}
      </Text>
      <View style={styles.plotTextContainer}>
        <Text style={styles.plotText}>{data["Plot"]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  genreText: { fontWeight: "bold" },
  plotTextContainer: { marginHorizontal: "5%", marginTop: "3%" },
  plotText: {},
});
