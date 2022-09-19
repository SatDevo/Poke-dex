import Home from 'features/pokemon/home/HomeScreen.view'
import Details from 'features/pokemon/details/DetailsScreen.view'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const AppNavigator = createStackNavigator({
  HOME: {
    screen: Home,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  DETAIL_PAGE: {
    screen: Details,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
})

export default createAppContainer(AppNavigator)
