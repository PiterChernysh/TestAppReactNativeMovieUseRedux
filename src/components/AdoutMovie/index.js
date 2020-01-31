import React from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { W, H, image } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: W,
    height: H,
    backgroundColor: "black",
    display: "flex"
  },
  backdropImage: {
    position: "relative",
    width: W,
    flex: 1
  },
  h1: {
    fontSize: W / 18,
    color: "white"
  },
  h2: {
    fontSize: W / 22,
    color: "white"
  },
  h3: {
    fontSize: W / 28,
    color: "white"
  },
  head: {
    flex: 1
  },
  body: {
    flex: 1.5
  },
  futer: {
    flex: 1.3,
    backgroundColor: "black"
  }
});

const AboutMovie = props => {
  const { movie, similarMoviesById } = props;
  const { container, backdropImage, h1, h2, h3, head, body, futer } = styles;
  const { backdrop_path, title, overview, release_date } = movie;
  const date = new Date(release_date).getFullYear();
  const img = image + backdrop_path;
  return (
    <ScrollView>
      <View style={container}>
        <View style={head}>
          <Image style={backdropImage} source={{ uri: img }} />
        </View>
        <View style={body}>
          <View>
            <Text style={h3}>{date}</Text>
            <Text style={h1}>{title}</Text>
            <Text style={h3}>OVERVIEW:</Text>
            <Text style={h3}>{overview}</Text>
            <Text style={h3}></Text>
            <Text style={h1}>SIMILAR MOVIES:</Text>
          </View>
        </View>
        <View style={futer}>
          <ScrollView horizontal={true}>
            {similarMoviesById.map(item => (
              <View key={item.id + 2}>
                <Image
                  style={backdropImage}
                  key={item.id}
                  source={{ uri: image + item.backdrop_path }}
                />
                <Text style={h1} key={item.id + 1}>
                  {item.title}{" "}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = store => ({
  movie: store.movie,
  similarMoviesById: store.similarMoviesById
});
export default connect(mapStateToProps)(AboutMovie);
