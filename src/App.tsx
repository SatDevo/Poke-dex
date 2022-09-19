import * as React from 'react'
import { QueryClientProvider } from 'react-query'
import queryClient from 'data/client'
import NavigationContainer from 'lib/navigation/StackNavigator'

export type AppTabParamList = {
  Home: undefined
  Settings: { userID?: string }
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer />
    </QueryClientProvider>
  )
}

export default App
