import { StackNavigator } from 'react-navigation'

import Welcome from './components/Welcome'
import Home from './components/Home'
import SinglePost from './components/SinglePost'

const App = StackNavigator({
  Welcome: {screen: Welcome},
  Home: {screen: Home},
  SinglePost: {screen: SinglePost}
})

export default App
