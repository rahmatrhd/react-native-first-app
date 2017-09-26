import { StackNavigator } from 'react-navigation'

import Welcome from './components/Welcome'
import Home from './components/Home'

const App = StackNavigator({
  Welcome: {screen: Welcome},
  Home: {screen: Home}
})

export default App
