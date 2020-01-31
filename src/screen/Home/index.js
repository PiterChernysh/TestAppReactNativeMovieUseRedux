import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import ImageCard from "../../components/ImageCard";
import { GETMoviesList } from "../../actions/GETMoviesList";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

const Home = props => {
  const { GETMoviesList, movieList, navigation } = props;
  useEffect(() => {
    GETMoviesList();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {movieList.map(item => (
          <ImageCard key={item.id} movie={item} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = store => ({
  movieList: store.movieList
});
export default connect(mapStateToProps, { GETMoviesList })(Home);
