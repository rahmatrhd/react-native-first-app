import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Content,
  Card,
  CardItem,
  Body,
  Text
} from 'native-base'
import {
  Image,
  StyleSheet
} from 'react-native'

import { getById } from '../selectors/movieSelectors'

class SinglePost extends Component {
  static navigationOptions = {
    title: 'Single Post'
  }

  componentWillReceiveProps() {
    console.log(this.props)
  }

  render() {
    return (
      <Content>
        <Card>
          <CardItem cardBody>
            <Image source={{uri: this.props.movie.imageUrl}} style={styles.cardImage}/>
          </CardItem>
        </Card>

        <Card>
          <CardItem header>
            <Body>
              <Text>{this.props.movie.title}</Text>
              <Text note>by: {this.props.movie.by}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{this.props.movie.summary}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
    width: null,
    height: 200
  }
})

const mapStateToProps = (state, ownProps) => ({
  movie: getById(state, ownProps.navigation.state.params.id)
})

export default connect(mapStateToProps)(SinglePost)
