import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Content,
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Text,
  Button
} from 'native-base'
import { Image, StyleSheet } from 'react-native'

import { getMovies } from '../actions/movieActions'
import { listMovies } from '../selectors/movieSelectors'

class Home extends Component {
  static navigationOptions = {
    title: 'Movies Review'
  }

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    return (
      <Content>
        {this.props.movies.map(movie => (
          <Card>
            <CardItem header>
              <Body>
                <Text style={styles.cardTitle}>{movie.title}</Text>
                <Text note>by: {movie.by}</Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: movie.imageUrl}} style={styles.cardImage}/>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{movie.summary}</Text>
              </Body>
            </CardItem>
          </Card>
        ))}
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  cardTitle: {
    fontWeight: 'bold'
  },
  cardImage: {
    flex: 1,
    width: null,
    height: 150
  }
})

const mapStateToProps = state => ({
  movies: listMovies(state)
})

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
