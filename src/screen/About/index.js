import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { GETMovieById } from "../../actions/GETMovieById";
import { GETSimilarMoviesById } from "../../actions/GETSimilarMoviesById";

import AboutMovie from "../../components/AdoutMovie";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  }
});

const About = props => {
  const {GETMovieById, GETSimilarMoviesById}=props
  useEffect(() => {
    GETMovieById(props);
    GETSimilarMoviesById(props);
  }, []);
  return (
    <AboutMovie
      styles={styles.container}
      navigation={props.navigation}
      movieId={props.movieId}
    />
  );
};

const mapStateToProps = store => ({
  movieId: store.movieId
});
export default connect(mapStateToProps, { GETMovieById, GETSimilarMoviesById })(About);
