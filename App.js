import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import store from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
        <Navigation style={styles.container} />
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
