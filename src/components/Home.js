import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Content,
  List,
  ListItem,
  Thumbnail,
  Body,
  Right,
  Text,
  Button,
  Icon
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
      <Content style={styles.content}>
        <List
          dataArray={this.props.movies}
          renderRow={movie => (
            <ListItem onPress={() => this.props.navigation.navigate('SinglePost', {id: movie.id})}>
              <Thumbnail square size={80} source={{ uri: movie.imageUrl }} />
              <Body>
                <Text>{movie.title}</Text>
                <Text note>by: {movie.by}</Text>
              </Body>
            </ListItem>
          )}
        >
        </List>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white'
  }
})

const mapStateToProps = state => ({
  movies: listMovies(state)
})

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
