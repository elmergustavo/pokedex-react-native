import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import Account from '../screens/Account';
const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} options={{
        title: "My cuenta"
      }}/>
    </Stack.Navigator>
  )
}

export default AccountNavigator